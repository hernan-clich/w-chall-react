import React from 'react';
import { Link } from 'react-router-dom';

import { StyledError404 } from '../styles/Error404';
import { FooterButton } from './Buttons';

const HeroImg = () => {
  return (
    <StyledError404>
      <div id="error-wrapper">
        <img src="./assets/logo_full_color.svg" alt="wolox logo" />
        <div className="error-text">
          <h1>Error 404</h1>
          <h2>Página no encontrada</h2>
        </div>
        <FooterButton as={Link} to="/">Volver a Home</FooterButton>
      </div>
    </StyledError404>
  );
};

export default HeroImg;
