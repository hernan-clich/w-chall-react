import React from 'react';

import { StyledSocialImg } from '../../styles/Home/SocialImg';
import { SocialButton } from '../Buttons';

const SocialImg = () => {
  return (
    <StyledSocialImg>
      <div className="social-overlay"/>
      <h2><span>350 + </span><span>Woloxers</span></h2>
      <div className="social-twitter">
        <img src="./assets/twitter-logo.svg" alt="twitter logo" />
        <span>@Wolox</span>
      </div>
      <SocialButton 
        as="a" 
        href="https://twitter.com/Wolox" 
        rel="external noopener noreferrer" 
        target="_blank"
      >Siguenos</SocialButton>
    </StyledSocialImg>
  );
};

export default SocialImg;
