import React from 'react';
import PropTypes from 'prop-types';

import { StyledListItem } from '../../styles/Lists/SingleListItem';

const SingleListItem = props => {

  const techieLogo = {backgroundImage: `url(${props.logo})`};
  
  return (
    <StyledListItem>
      <div className="list-top">
        <div style={techieLogo} className="list-logo"/>
        <div className="list-tech">
          <div className="tech-header">
            <p>{props.tech}</p>
          </div>
          <div className="tech-subheader">
            <p>{props.language}</p>
            <p>Licencia: {props.license}</p>
            <p>Lanzamiento: {props.year}</p>
          </div>
        </div>
      </div>
      <div className="list-bottom">
        <div className="list-author">
          <p>Autor:</p>
          <p>{props.author}</p>
        </div>
        <div className="list-type">
          <div className="list-type-wrapper">
            <p data-type={props.type}>{props.type}</p>
          </div>
        </div>
      </div>
    </StyledListItem>
  );
};

SingleListItem.propTypes = {
  logo: PropTypes.string, 
  tech: PropTypes.string, 
  language: PropTypes.string, 
  year: PropTypes.string, 
  author: PropTypes.string, 
  license: PropTypes.string, 
  type: PropTypes.string
};

export default SingleListItem;
