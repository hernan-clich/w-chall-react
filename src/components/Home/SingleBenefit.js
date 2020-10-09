import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { StyledBenefit } from '../../styles/Home/SingleBenefit';

const SingleBenefit = props => {

  const [benWrapperRef, benInView] = useInView({
    threshold: 0.15,
    triggerOnce: true
  });

  return (
    <StyledBenefit ref={benWrapperRef}>
      <motion.div
        id="tech-wrapper" 
        initial={{y: '15vh'}}
        animate={{ 
          opacity: benInView ? 1 : 0,
          y: benInView ? 0 : '15vh'
        }}
        transition={{ type: 'spring', stiffness: 30 }}
      >
        <div className="sing-ben-img">
          <img src={props.benImg} alt="sadasd"/>
        </div>
        <div className="sing-ben-text">
          <span>{props.benText1}</span>
          <span>{props.benText2}</span>
          <span>{props.benText3}</span>
        </div>
      </motion.div>
    </StyledBenefit>
  );
};

SingleBenefit.propTypes = {
  benImg: PropTypes.string.isRequired, 
  benText1: PropTypes.string.isRequired, 
  benText2: PropTypes.string, 
  benText3: PropTypes.string
};

export default SingleBenefit;
