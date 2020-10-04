import React from 'react';

import { StyledForm } from '../../styles/Login/Form';
import { FooterButton } from '../Buttons';

const LoginForm = () => {
  return (
    <StyledForm>
      <form action="">
        <div>
          <label htmlFor="email">Usuario</label>
          <img src="/assets/login-email.svg" alt="" />
          <input type="email" id="email"/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <img src="/assets/login-password.svg" alt="small padlock" />
          <input type="password" id="password"/>
        </div>
        <FooterButton>Submit</FooterButton>
      </form>
    </StyledForm>
  );
};

export default LoginForm;