import React from 'react';

import { StyledHero } from '../../styles/Home/Hero';

const Hero = () => {
  return (
    <StyledHero>
      <div id="hero-wrapper">
        <div className="hero-text">
          <h1>Bienvenido a tu <br/><span>Entrevista Técnica</span> en <br/><span>Wolox</span></h1>
        </div>
        <div className="hero-img">
          <img 
            alt="Employees surrounded by tech stuff at Wolox."
            src="/assets/Img_Hero/Ic_ilustra_Hero.png"
            srcSet=" 
              /assets/Img_Hero/Ic_ilustra_Hero@2x.png 2x,
              /assets/Img_Hero/Ic_ilustra_Hero@3x.png 3x
            "
          />
        </div>
      </div>
    </StyledHero>
  );
};

export default Hero;
