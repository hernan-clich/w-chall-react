import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { StyledLogin } from '../../styles/Login/Login';
import { FormButton, DisabledButton, BackHomeButton } from '../Buttons';

const Login = () => {
  const [emailState, setEmailState] = useState('');
  const [passwordState, setPasswordState] = useState('');
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [inputChecked, setInputChecked] = useState(false);
  
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const dispatch = useDispatch();

  //Regex to validate input fields
  const { emailRegex, passwordRegex } = {
    // eslint-disable-next-line no-useless-escape
    emailRegex: /^([a-z\d-_\.]+)@([a-z\d-]+)\.([a-z]{2,6})(\.[a-z]{2,6})?$/, 
    passwordRegex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
  };

  // Helper functions
  // If input isn't empty then placeholder floats
  // If input passes regex test then green border else red border &&
  //   and valid field is set to true
  // Sets value field of each input with current state
  const handleEmailChange = e => {
    if(e.target.value.length > 0) {
      emailRef.current.classList.add('input-not-empty');
    } else {
      emailRef.current.classList.remove('input-not-empty');
    }

    if(emailRegex.test(e.target.value)) {
      emailRef.current.classList.remove('input-invalid');
      emailRef.current.classList.add('input-valid');
      setEmailIsValid(true);
    } else {
      emailRef.current.classList.remove('input-valid');
      emailRef.current.classList.add('input-invalid');
    }

    setEmailState(e.target.value);
  };

  const handlePasswordChange = e => {
    if(e.target.value.length > 0) {
      passwordRef.current.classList.add('input-not-empty');
    } else {
      passwordRef.current.classList.remove('input-not-empty');
    }

    if(passwordRegex.test(e.target.value)) {
      passwordRef.current.classList.remove('input-invalid');
      passwordRef.current.classList.add('input-valid');
      setPasswordIsValid(true);
    } else {
      passwordRef.current.classList.remove('input-valid');
      passwordRef.current.classList.add('input-invalid');
    }

    setPasswordState(e.target.value);
  };

  const handleSubmission = e => {
    if(inputChecked) localStorage.setItem('user', emailState);
    dispatch({type: 'IS_LOGGED'});
    setEmailState('');
    setPasswordState('');
    e.preventDefault();
  };

  return (
    <StyledLogin>
      <BackHomeButton as={Link} to="/">Volver a Home</BackHomeButton>
      <div id="form-wrapper">
        <h2>Iniciar sesión</h2>
        <form onSubmit={handleSubmission} autoComplete="off">
          <div className="input-wrapper">
            <input 
              type="email" 
              id="email"
              ref={emailRef}
              onChange={handleEmailChange}
              value={emailState}
            />
            <label htmlFor="email">Usuario</label>
            <p>Por favor introducir una dirección de email válida</p>
          </div>
          <div className="input-wrapper">
            <input 
              type="password" 
              id="password"
              ref={passwordRef}
              onChange={handlePasswordChange}
              value={passwordState}
            />
            <label htmlFor="password">Password</label>
            <p>La contraseña debe contener entre 8 y 15 caracteres, por lo menos una letra mayúscula, una letra minúscula, un número y un caracter especial</p>
          </div>
          <div className="checkbox-wrapper"
            onClick={() => setInputChecked(!inputChecked)}
          >
            <div 
              className="form-checkbox" 
              tabIndex="0"
              onKeyPress={e => (e.key === 'Enter' || e.key === ' ') && setInputChecked(!inputChecked)}
            >
              {(inputChecked) && <div className="form-checkbox-tick"/>}
            </div>
            <p>Mantenerse conectado?</p>
          </div>
          {(emailIsValid && passwordIsValid) ?
            <FormButton as="button" type="submit">Ingresar</FormButton> :
            <DisabledButton>Ingresar</DisabledButton>
          }
        </form>
      </div>
    </StyledLogin>
  );
};

export default Login;