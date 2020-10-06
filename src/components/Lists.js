import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useQuery } from 'react-query';

import Header from './Header';
import { StyledLists } from '../styles/Lists/Lists';
import SingleListItem from './Lists/SingleListItem';

const fetchTecnologias = async () => {
  const res = await fetch('http://private-8e8921-woloxfrontendinverview.apiary-mock.com/techs');
  return res.json();
};

const Lists = () => {
  const [searchList, setSearchList] = useState('');
  const [sortAscending, setSortAscending] = useState(true);
  const [searchByName, setSearchByName] = useState(true);

  const isUserLoggedIn = useSelector(state => state.isSignedIn);

  const { data, status } = useQuery('tecnologias', fetchTecnologias);

  const sortList = arr => {
    if(sortAscending){
      return arr.sort((a, b) => (a.tech.toLowerCase() > b.tech.toLowerCase()) ? 1 : -1);
    } else {
      return arr.sort((a, b) => (a.tech.toLowerCase() < b.tech.toLowerCase()) ? 1 : -1);
    }
  };

  if (!isUserLoggedIn && !localStorage.getItem('user')) {
    return <Redirect to="/login"/>;
  }

  return (
    <>
      <Header/>
      <StyledLists>
        <div id="list-search-wrapper">
          <div className="list-search-input">
            <input 
              type="text" 
              name="search-list" 
              id="search-list"
              onChange={e => setSearchList(e.target.value)}
              value={searchList}
            />
          </div>
          <div className="list-radios" >
            <input 
              type="radio" 
              value="Nombre" 
              id="nombre"
              onChange={() => setSearchByName(!searchByName)} 
              checked={searchByName} 

            />
            <label htmlFor="tipo">Nombre</label>
            <input 
              type="radio" 
              value="Tipo" 
              id="tipo"
              onChange={() => setSearchByName(!searchByName)} 
              checked={!searchByName} 
            />
            <label htmlFor="tipo">Tipo</label>
          </div>
          <div className="list-sorting">
            <p 
              onClick={() => setSortAscending(!sortAscending)}
              className={sortAscending ? 'ascendente' : 'descendente'}
            >
              Ordenando de forma <span>{sortAscending ? 'ascendente' : 'descendente'}</span>
            </p>
          </div>
        </div>
        {status === 'loading' && (
          <h2>Cargando listado...</h2>
        )}
        {status === 'success' && (
          <>
            <div id="list-wrapper">
              {
                sortList(data.filter(tech => tech.tech.toLowerCase().includes(searchList.toLowerCase())))
                  .map(tech => (
                    <SingleListItem
                      key={tech.tech}
                      logo={tech.logo}
                      tech={tech.tech}
                      language={tech.language}
                      year={tech.year}
                      author={tech.author}
                      license={tech.license}
                      type={tech.type}
                    />
                  ))
              }
            </div>
            <div className="list-counter-wrapper">
              <p>Actualmente viendo: {data.filter(tech => tech.tech.toLowerCase().includes(searchList.toLowerCase())).length} elementos</p>
            </div>
          </>
        )}
      </StyledLists>
    </>
  );
};

export default Lists;
