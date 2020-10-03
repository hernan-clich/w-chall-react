import React from 'react';
import PropTypes from 'prop-types';

import { StyledBenefit } from '../../styles/Home/SingleBenefit';

const SingleBenefit = props => {
  return (
    <StyledBenefit>
      <div className="sing-ben-img">
        <img src={props.benImg} alt="sadasd"/>
      </div>
      <div className="sing-ben-text">
        <span>{props.benText1}</span>
        <span>{props.benText2}</span>
        <span>{props.benText3}</span>
      </div>
    </StyledBenefit>
  );
};

SingleBenefit.propTypes = {
  benImg: PropTypes.string, 
  benText1: PropTypes.string, 
  benText2: PropTypes.string, 
  benText3: PropTypes.string
};

export default SingleBenefit;
