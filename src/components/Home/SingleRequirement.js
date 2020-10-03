import React from 'react';
import PropTypes from 'prop-types';

import { StyledRequirement } from '../../styles/Home/SingleRequirement';

const SingleRequirement = ({reqSrc, reqAlt, reqText}) => {
  return (
    <StyledRequirement>
      <img src={reqSrc} alt={reqAlt}/>
      <p>{reqText}</p>
    </StyledRequirement>
  );
};

SingleRequirement.propTypes = {
  reqSrc: PropTypes.string, 
  reqAlt: PropTypes.string, 
  reqText: PropTypes.string
};

export default SingleRequirement;
