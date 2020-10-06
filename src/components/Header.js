import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { useSelector } from 'react-redux';

import { LoginButton, LogoutButton } from './Buttons';
import { StyledHeader } from '../styles/Home/Header';

const Header = () => {
  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
  const isUserLoggedIn = useSelector(state => state.isSignedIn);
  
  // Side effects
  // Track Y Offset position to trigger styling changes in navbar
  useEffect(() => {
    const trackScrollPos = () => {
      const currentScrollPos = window.pageYOffset;
      setPrevScrollpos(currentScrollPos);
    };

    window.addEventListener('scroll', trackScrollPos);
    
    return () => {
      window.removeEventListener('scroll', trackScrollPos);
    };
  }, [prevScrollpos]);
  
  // Helper function
  const scrollBackToTop = () => scroll.scrollToTop();
  
  return (
    <StyledHeader 
      boxShadow={(prevScrollpos === 0) ? '0px 0px 3px 0px rgba(125,125,125,0)' : '0px 0px 3px 0px rgba(125,125,125,1)'}
      height={(prevScrollpos === 0) ? '20vh' : '15vh'}
      backgroundColor={(prevScrollpos === 0) ? 'rgba(255, 255, 255, 0)' : 'rgba(255, 255, 255, 1)'}
    >
      <div id="header-wrapper">
        <img 
          src="/assets/logo_full_color.svg" 
          alt="wolox logo" 
          onClick={scrollBackToTop}
        />
        <div className="header-right">
          <div>
            <Link to="/">Inicio</Link>
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
            <LogoutButton as={Link} to="/lists">Listado</LogoutButton>
          }
          
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
