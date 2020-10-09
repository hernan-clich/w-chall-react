import React from 'react';
import { useSelector } from 'react-redux';

import { StyledHeroImg } from '../../styles/Home/HeroImg';

const HeroImg = () => {

  const currVWidth = useSelector(state => state.currVW.payload);

  const setImgSrc = width => {
    if (width > 2520) {
      return './assets/Img_Hero/Ic_ilustra_Hero@3x.png';
    } else if (width > 1680) {
      return './assets/Img_Hero/Ic_ilustra_Hero@2x.png';
    } else {
      return './assets/Img_Hero/Ic_ilustra_Hero.png';
    }
  };

  return (
    <StyledHeroImg
      alt="Employees surrounded by tech stuff at Wolox."
      src={setImgSrc(currVWidth)}
    />
  );
};

export default HeroImg;
