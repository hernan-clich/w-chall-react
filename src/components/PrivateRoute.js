import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const PrivateRoute = ({component: Component, ...rest}) => {

  const isUserLoggedIn = useSelector(state => state.isSignedIn);

  return (
    <Route {...rest} render={props => (
      (isUserLoggedIn || localStorage.getItem('user'))
        ? <Component {...props} />
        : <Redirect to="/login" />
    )}/>
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired
};

export default PrivateRoute;