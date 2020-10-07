import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { StyledSearchBar } from '../../styles/Lists/SearchBar';
import { FooterButton } from '../Buttons';

const SearchBar = props => {
  
  return (
    <StyledSearchBar>
      <FooterButton as={Link} to="/" className="list-button-back">Volver a Home</FooterButton>
      <div className="list-img"/>
      <div className="list-search-input">
        <input 
          type="text" 
          name="search-list" 
          id="search-list"
          onChange={e => props.setSearchList(e.target.value)}
          value={props.searchList}
        />
      </div>
      <div className="list-radios" >
        <input 
          type="radio" 
          value="Nombre" 
          id="nombre"
          onChange={() => props.setSearchByName(!props.searchByName)} 
          checked={props.searchByName} 

        />
        <label htmlFor="tipo">Nombre</label>
        <input 
          type="radio" 
          value="Tipo" 
          id="tipo"
          onChange={() => props.setSearchByName(!props.searchByName)} 
          checked={!props.searchByName} 
        />
        <label htmlFor="tipo">Tipo</label>
      </div>
      <div className="list-sorting">
        <p 
          onClick={() => props.setSortAscending(!props.sortAscending)}
          className={props.sortAscending ? 'sort-asc' : 'sort-des'}
        >
              Ordenando de forma <span>{props.sortAscending ? 'ascendente' : 'descendente'}</span>
        </p>
      </div>
    </StyledSearchBar>
  );
};

SearchBar.propTypes = {
  searchList: PropTypes.string.isRequired,
  setSearchList: PropTypes.func.isRequired,
  sortAscending: PropTypes.bool.isRequired,
  setSortAscending: PropTypes.func.isRequired,
  searchByName: PropTypes.bool.isRequired,
  setSearchByName: PropTypes.func.isRequired
};

export default SearchBar;