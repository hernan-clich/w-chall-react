import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { useSelector } from 'react-redux';

import { LoginButton, ListButton } from '../Buttons';
import { StyledNavLinks } from '../../styles/Home/NavLinks';

const NavLinks = () => {
  const isUserLoggedIn = useSelector(state => state.isSignedIn);
  
  // Helper function
  const scrollBackToTop = () => scroll.scrollToTop();
  
  return (
    <StyledNavLinks>
      <div>
        <span onClick={scrollBackToTop}>Inicio</span>
        <ScrollLink 
          to="tech" 
          smooth={true} 
          duration={600}
          offset={-93}
        >
              Tecnologías
        </ScrollLink>
        <ScrollLink 
          to="benefits" 
          smooth={true} 
          duration={600}
          offset={-93}
        >
              Beneficios
        </ScrollLink>
        <ScrollLink 
          to="req" 
          smooth={true} 
          duration={600}
          offset={-93}
        >
              Requerimientos
        </ScrollLink>
      </div>
      { (!isUserLoggedIn && !localStorage.getItem('user')) ?
        <LoginButton as={Link} to="/login">Login</LoginButton> :
        <ListButton as={Link} to="/lists">Listado</ListButton>
      }
    </StyledNavLinks>
  );
};

export default NavLinks;
