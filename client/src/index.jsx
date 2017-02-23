import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/App.js';
import Work from './components/Work.js';
import Contact from './components/Contact.js';
import About from './components/About.js';
import Signin from './components/Signin.jsx';
import Join from './components/Join.jsx';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App} >
      <Route path="/work" component={Work} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
      <Route path="/join" component={Join} />
      <Route path="/signin" component={Signin} />
    </Route>
  </Router>
), document.querySelector('.scene-container'));
