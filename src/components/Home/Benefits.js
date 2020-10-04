import React from 'react';

import { StyledBenefits } from '../../styles/Home/Benefits';
import SingleBenefit from './SingleBenefit';

const Benefits = () => {
  return (
    <StyledBenefits id="benefits">
      <h2>Entre los beneficios que ofrecemos se encuentran <span> ;)</span></h2>
      <div id="benefits-wrapper">
        <SingleBenefit 
          benImg="/assets/Ic_Hour.svg"
          benText1="Flexibilidad"
          benText2="Horaria"
        />
        <SingleBenefit 
          benImg="/assets/Ic_HomeOffice.svg"
          benText1="Home Office"
        />
        <SingleBenefit 
          benImg="/assets/Ic_Workshops.svg"
          benText1="Capacitaciones"
          benText2="y workshops"
        />
        <SingleBenefit 
          benImg="/assets/Ic_DrinkSnacks.svg"
          benText1="Snacks, frutas"
          benText2="y bebidas gratis"
        />
        <SingleBenefit 
          benImg="/assets/Ic_laptop.svg"
          benText1="Semana"
          benText2="remota"
        />
        <SingleBenefit 
          benImg="/assets/Ic_brain.svg"
          benText1="Trabajar"
          benText2="en ultimas"
          benText3="tecnologías"
        />
      </div>
    </StyledBenefits>
  );
};

export default Benefits;
