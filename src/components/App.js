import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home';
import Login from './Login';
import Lists from './Lists';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/lists" component={Lists} />
        </>
      </BrowserRouter>
    </div>
  );
};

export default App;
