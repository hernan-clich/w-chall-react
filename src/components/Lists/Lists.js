import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useQuery } from 'react-query';

import { StyledLists } from '../../styles/Lists/Lists';
import SearchBar from './SearchBar';
import SingleListItem from './SingleListItem';

// Fetching data from API
const fetchTecnologias = async () => {
  const res = await fetch('http://private-8e8921-woloxfrontendinverview.apiary-mock.com/techs');
  return res.json();
};

const Lists = () => {

  // Internal state
  const [searchList, setSearchList] = useState('');
  const [sortAscending, setSortAscending] = useState(true);
  const [searchByName, setSearchByName] = useState(true);

  // Bringing state from redux
  const isUserLoggedIn = useSelector(state => state.isSignedIn);

  // React Query hook
  const { data, status } = useQuery('tecnologias', fetchTecnologias);
  
  // Helper functions

  const filterList = arr => {
    if(searchByName){
      return arr.filter(tech => tech.tech.toLowerCase().includes(searchList.toLowerCase()));
    } else {
      return arr.filter(tech => tech.type.toLowerCase().includes(searchList.toLowerCase()));
    }
  };
    
  const sortList = arr => {
    if(sortAscending){
      return arr.sort((a, b) => (a.tech.toLowerCase() > b.tech.toLowerCase()) ? 1 : -1);
    } else {
      return arr.sort((a, b) => (a.tech.toLowerCase() < b.tech.toLowerCase()) ? 1 : -1);
    }
  };

  // If user isn't logged in then redirect to login page

  if (!isUserLoggedIn && !localStorage.getItem('user')) {
    return <Redirect to="/login"/>;
  }

  return (
    <StyledLists>
      <SearchBar
        searchList={searchList}
        setSearchList={setSearchList}
        sortAscending={sortAscending}
        setSortAscending={setSortAscending}
        searchByName={searchByName}
        setSearchByName={setSearchByName}

      />
      {status === 'loading' && (
        <h2>Cargando listado...</h2>
      )}
      {status === 'success' && (
        <>
          <div id="list-wrapper">
            { sortList(filterList(data))
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
            {filterList(data).length > 0 ?
              <p>Actualmente visualizando: {filterList(data).length} elementos</p> :
              <p>Ninguna tecnología encontrada con los criterios solicitados</p>
            }
          </div>
        </>
      )}
    </StyledLists>
  );
};

export default Lists;
