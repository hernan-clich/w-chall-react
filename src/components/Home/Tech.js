import React from 'react';

import { StyledTech } from '../../styles/Home/Tech';

const Tech = () => {
  return (
    <StyledTech>
      <div id="tech-wrapper">
        <div className="tech-text">
          <h2>Estamos buscando <br/>para incorporar gente <br/> increíble para estas <br/> tecnologías:</h2>
        </div>
        <div className="tech-img">
          <img src="/assets/Ic_Tecnologys.svg" alt=""/>
        </div>
      </div>
    </StyledTech>
  );
};

export default Tech;
