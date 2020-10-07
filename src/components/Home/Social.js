import React, { lazy, Suspense } from 'react';

import { StyledSocial } from '../../styles/Home/Social';
import Loader from '../Loader';

const SocialImg = lazy(() => import('./SocialImg'));

const Social = () => {
  return (
    <StyledSocial>
      <div id="social-wrapper">
        <div className="social-img">
          <Suspense fallback={<Loader/>}>
            <SocialImg/>
          </Suspense>
        </div>
        <div className="social-text">
          <h2>Trabajamos para <br/> <span>convertir </span><span>ideas </span>en <br/> productos.</h2>
        </div>
      </div>
    </StyledSocial>
  );
};

export default Social;
