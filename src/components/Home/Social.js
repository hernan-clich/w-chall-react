import React from 'react';

import { StyledSocial } from '../../styles/Home/Social';
import { SocialButton } from '../Buttons';

const Social = () => {
  return (
    <StyledSocial>
      <div id="social-wrapper">
        <div className="social-img">
          <h2><span>350 + </span><span>Woloxers</span></h2>
          <div className="social-twitter">
            <img src="/assets/twitter-logo.svg" alt="twitter logo" />
            <span>@Wolox</span>
          </div>
          <SocialButton 
            as="a" 
            href="https://twitter.com/Wolox" 
            rel="external noopener noreferrer" 
            target="_blank"
          >Siguenos</SocialButton>
        </div>
        <div className="social-text">
          <h2>Trabajamos para <br/> <span>convertir </span><span>ideas </span>en <br/> productos.</h2>
        </div>
      </div>
    </StyledSocial>
  );
};

export default Social;
