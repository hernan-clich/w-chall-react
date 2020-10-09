import React from 'react';

import { StyledRequirements } from '../../styles/Home/Requirements';
import SingleRequirement from './SingleRequirement';

const Requirements = () => {
  return (
    <StyledRequirements id="req">
      <div id="req-wrapper">
        <div className="req-header">
          <h2>Requerimientos</h2>
        </div>
        <div className="req-bullets-wrapper">
          <SingleRequirement
            reqSrc="./assets/Ic_Bullet_1.svg"
            reqAlt="green bullet dot"
            reqText="Estudiantes avanzados o recibidos de carreras del rubro informático, sistemas o electrónicos."
          />
          <SingleRequirement
            reqSrc="./assets/Ic_Bullet_2.svg"
            reqAlt="black bullet dot"
            reqText="Inglés intermedio/avanzado"
          />
          <SingleRequirement
            reqSrc="./assets/Ic_Bullet_3.svg"
            reqAlt="blue bullet dot"
            reqText="Conocimiento en metodologías ágiles (deseable)"
          />
        </div>
      </div>
    </StyledRequirements>
  );
};

export default Requirements;
