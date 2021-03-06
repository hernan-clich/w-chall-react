import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import {GlobalStyles} from '../styles/GlobalStyles';
import Home from './Home/Home';
import Login from './Login/Login';
import Lists from './Lists/Lists';
import Error404 from './Error404';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const App = () => {
  return (
    <Router>
      <div className="App">
        <GlobalStyles/>
        <Switch>
          <PublicRoute restricted={false} component={Home} path="/" exact />
          <PublicRoute restricted={true} component={Login} path="/login" exact />
          <PrivateRoute component={Lists} path="/lists" exact />
          <Route path="*" component={Error404} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
