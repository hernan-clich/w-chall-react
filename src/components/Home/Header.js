import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';

import { NavButton } from '../Buttons';
import { StyledHeader } from '../../styles/Home/Header';

const Header = () => {
  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
  
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
        <img src="/assets/logo_full_color.svg" alt="wolox logo" />
        <div className="header-right">
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
          <NavButton as={Link} to="/login">Login</NavButton>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
