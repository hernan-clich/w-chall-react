import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

import { StyledTech } from '../../styles/Home/Tech';

const Tech = () => {

  const [techWrapperRef, techInView] = useInView({
    threshold: 0.15,
    triggerOnce: true
  });

  return (
    <StyledTech id="tech">
      <motion.div 
        id="tech-wrapper" 
        ref={techWrapperRef}
        initial={{y: '15vh'}}
        animate={{ 
          opacity: techInView ? 1 : 0,
          y: techInView ? 0 : '15vh'
        }}
        transition={{ type: 'spring', stiffness: 30 }}
      >
        <div className="tech-text">
          <h2>Estamos buscando <br/>para incorporar gente <br/> increíble para estas <br/> tecnologías:</h2>
        </div>
        <div className="tech-img">
          <img src="/assets/Ic_Tecnologys.svg" alt="Technologies list"/>
        </div>
      </motion.div>
    </StyledTech>
  );
};

export default Tech;
