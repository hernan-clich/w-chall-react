import React, { lazy, Suspense } from 'react';

import { StyledHero } from '../../styles/Home/Hero';
import Loader from '../Loader';

const HeroImg = lazy(() => import('./HeroImg'));

const Hero = () => {
  return (
    <StyledHero>
      <div id="hero-wrapper">
        <div className="hero-text">
          <h1>Bienvenido a tu <br/><span>Entrevista Técnica</span> en <br/><span>Wolox</span></h1>
        </div>
        <div className="hero-img">
          <Suspense fallback={<Loader/>}>
            <HeroImg/>
          </Suspense>
        </div>
      </div>
    </StyledHero>
  );
};

export default Hero;
