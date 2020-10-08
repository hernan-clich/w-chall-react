import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { StyledSearchBar } from '../../styles/Lists/SearchBar';
import { BackHomeButton } from '../Buttons';

const SearchBar = props => {
  
  return (
    <StyledSearchBar>
      <BackHomeButton as={Link} to="/">Volver a Home</BackHomeButton>
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
        <div 
          className={`list-radio-wrapper ${props.searchByName ? 'radio-ticked' : ''}`}
          onClick={() => props.setSearchByName(true)} 
          id="nombre"
        >
          <div className="list-radio-tick"/>
        </div>
        <label htmlFor="tipo" data-testid="tipo">Nombre</label>
        <div 
          className={`list-radio-wrapper ${!props.searchByName ? 'radio-ticked' : ''}`}
          onClick={() => props.setSearchByName(false)} 
          id="tipo"
        >
          <div className="list-radio-tick"/>
        </div>
        <label htmlFor="tipo">Tipo</label>
      </div>
      <div className="list-sorting">
        <p 
          onClick={() => props.setSortAscending(!props.sortAscending)}
          className={props.sortAscending ? 'sort-asc' : 'sort-des'}
          data-testid="list-sorting"
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