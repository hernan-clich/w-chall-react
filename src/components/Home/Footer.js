import React from 'react';

import { StyledFooter } from '../../styles/Home/Footer';
import { FooterButton } from '../Buttons';

const Footer = () => {
  return (
    <StyledFooter>
      <div id="footer-content">
        <h2>Gracias por <span>completar el ejercicio</span></h2>
        <h3>Te invitamos a ver mas información</h3>
        <FooterButton 
          as="a" 
          href="https://www.wolox.com.ar/" 
          rel="external noopener noreferrer" 
          target="_blank"
        >Conocer más</FooterButton>
      </div>
      <div className="footer-logo">
        <img src="/assets/Ic_Wolox_Footer.svg" alt="wolox logo"/>
      </div>
    </StyledFooter>
  );
};

export default Footer;
