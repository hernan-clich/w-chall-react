import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {GlobalStyles} from '../styles/GlobalStyles';
import Home from './Home';
import Login from './Login';
import Lists from './Lists';

const App = () => {
  return (
    <div className="App">
      <GlobalStyles/>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/lists" component={Lists} />
          <Route path="*" component={() => 'Error 404: La página no existe'} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
