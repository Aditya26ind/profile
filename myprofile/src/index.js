import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Py from './base/pyhtonprojects';
import Webdev from './base/webprojects';
import Certificate from './base/certificates';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/">
    <App />
    </Route>
    <Route exact path="/pythonproject">
      <Py/>

    </Route>
    <Route exact path="/webproject">
      <Webdev/>
    </Route >

    <Route exact path="/certificates">
    <Certificate/>
    </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);