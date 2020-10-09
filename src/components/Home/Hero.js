import React, { lazy, Suspense } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

import { StyledHero } from '../../styles/Home/Hero';
import Loader from '../Loader';

const HeroImg = lazy(() => import('./HeroImg'));

const Hero = () => {

  const [heroMainRef, heroInView] = useInView({
    threshold: 0.15,
    triggerOnce: true, 
    rootMargin: '200px 0px'
  });

  return (
    <StyledHero>
      <div id="hero-wrapper" ref={heroMainRef}>
        <motion.div 
          className="hero-text" 
          initial={{ x: '-100vw'}}
          animate={{ 
            x: heroInView ? 0 : '-100vw',
            opacity: heroInView ? 1 : 0
          }}
          transition={{ type: 'spring', stiffness: 30 }}
        >
          <h1>Bienvenido a tu <br/><span>Entrevista Técnica</span> en <br/><span>Wolox</span></h1>
        </motion.div>
        <motion.div className="hero-img"
          initial={{x: '100vw'}}
          animate={{x: heroInView ? 0 : '100vw'}}
          transition={{ type: 'spring', stiffness: 30 }}
        >
          <Suspense fallback={<Loader/>}>
            <HeroImg/>
          </Suspense>
        </motion.div>
      </div>
    </StyledHero>
  );
};

export default Hero;
