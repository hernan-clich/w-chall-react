import React, { useState } from 'react';

import { StyledBurger } from '../../styles/Home/Burger';
import Sidebar from './Sidebar';

const Burger = () => {
  const [navOpen, setNavOpen] = useState(true);
  const [sidebarClass, setSidebarClass] = useState('');

  const handleBurgerClick = () => {
    setNavOpen(!navOpen);
    if(navOpen) {
      setSidebarClass('side-open');
    }
    if(!navOpen) {
      setSidebarClass('side-close');
    }
  };

  return (
    <StyledBurger id="burger" onClick={handleBurgerClick}>
      <span className={navOpen ? 'nav-closed' : 'nav-open'}></span>
      <Sidebar 
        setSidebarClass={setSidebarClass}
        sidebarClass={sidebarClass} 
        setNavOpen={setNavOpen} 
        navOpen={navOpen} 
      />
    </StyledBurger>
  );
};

export default Burger;
