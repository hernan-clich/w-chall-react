import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const PublicRoute = ({component: Component, restricted, ...rest}) => {

  const isUserLoggedIn = useSelector(state => state.isSignedIn);

  return (
    <Route {...rest} render={props => (
      ((localStorage.getItem('user') ?? isUserLoggedIn) && restricted)
        ? <Redirect to="/lists" />
        : <Component {...props} />
    )}/>
  );
};

PublicRoute.propTypes = {
  component: PropTypes.elementType.isRequired, 
  restricted: PropTypes.bool.isRequired
};

export default PublicRoute;