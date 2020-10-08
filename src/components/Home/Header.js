import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { StyledHeader } from '../../styles/Home/Header';
import NavLinks from './NavLinks';
import Burger from './Burger';

const Header = () => {
  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);

  const currVWidth = useSelector(state => state.currVW.payload);
  const dispatch = useDispatch();
  
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

  // Event listener to continuously capture the vw

  useEffect(() => {
    const setWidthCallback = () => {
      dispatch({type: 'VIEWPORT_WIDTH', payload: window.innerWidth});
    };

    window.addEventListener('resize', setWidthCallback);

    return () => {
      window.removeEventListener('resize', setWidthCallback);
    };
  }, [dispatch, currVWidth]);
  
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
        />
        {(currVWidth > 1200) ? (<NavLinks/>) : (<Burger/>)}
      </div>
    </StyledHeader>
  );
};

export default Header;
