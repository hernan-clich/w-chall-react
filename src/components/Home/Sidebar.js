import React from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { LoginButton, ListButton } from '../Buttons';
import { StyledSidebar } from '../../styles/Home/Sidebar';

const Sidebar = props => {

  // Helper functions
  const scrollBackToTop = () => scroll.scrollToTop();

  const handleClick = () => {
    props.setNavOpen(!props.navOpen);
    props.setSidebarClass('');
  };

  const isUserLoggedIn = useSelector(state => state.isSignedIn);

  return (
    <StyledSidebar className="sidebar-wrapper">
      <div id={props.sidebarClass} className="sidebar-overlay"></div>
      <div id={props.sidebarClass} className="sidebar">
        <div>
          <span onClick={scrollBackToTop}>Inicio</span>
          <ScrollLink 
            to="tech" 
            smooth={true} 
            duration={600}
            offset={-93}
            onClick={handleClick}
          >
              Tecnologías
          </ScrollLink>
          <ScrollLink 
            to="benefits" 
            smooth={true} 
            duration={600}
            offset={-93}
            onClick={handleClick}
          >
              Beneficios
          </ScrollLink>
          <ScrollLink 
            to="req" 
            smooth={true} 
            duration={600}
            offset={-93}
            onClick={handleClick}
          >
              Requerimientos
          </ScrollLink>
          { (!isUserLoggedIn && !localStorage.getItem('user')) ?
            <LoginButton as={Link} to="/login">Login</LoginButton> :
            <ListButton as={Link} to="/lists">Listado</ListButton>
          }
        </div>
      </div>
    </StyledSidebar>
  );
};

Sidebar.propTypes = {
  setSidebarClass: PropTypes.func.isRequired,
  sidebarClass: PropTypes.string.isRequired,
  setNavOpen: PropTypes.func.isRequired,
  navOpen: PropTypes.bool.isRequired
};

export default Sidebar;