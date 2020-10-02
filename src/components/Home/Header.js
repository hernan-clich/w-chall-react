import React from 'react';
import { Link } from 'react-router-dom';

import { NavButton } from '../Buttons';
import { StyledHeader } from '../../styles/Home/Header';

const Header = () => {
  return (
    <StyledHeader>
      <div id="header-wrapper">
        <img src="/assets/logo_full_color.svg" alt="wolox logo" />
        <div className="header-right">
          <ul>
            <li>Inicio</li>
            <li>Tecnologías</li>
            <li>Beneficios</li>
            <li>Requerimientos</li>
          </ul>
          <NavButton as={Link} to="/login">Login</NavButton>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
