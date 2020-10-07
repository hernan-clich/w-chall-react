import React from 'react';

import { StyledHeroImg } from '../../styles/Home/HeroImg';

const HeroImg = () => {
  return (
    <StyledHeroImg
      alt="Employees surrounded by tech stuff at Wolox."
      src="/assets/Img_Hero/Ic_ilustra_Hero.png"
      srcSet=" 
        /assets/Img_Hero/Ic_ilustra_Hero@2x.png 2x,
        /assets/Img_Hero/Ic_ilustra_Hero@3x.png 3x
      "
    />
  );
};

export default HeroImg;
