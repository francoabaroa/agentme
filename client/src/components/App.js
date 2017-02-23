import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router';
import $ from 'jquery';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import Inicio from './Inicio.js';
import Work from './Work.js';
import Contact from './Contact.js';
import About from './About.js';
import SearchFields from './SearchFields.js';
import Signin from './Signin.jsx';
import Join from './Join.jsx';

const injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      firstName: '',
      open: false,
      check:'fak'
    };
  }



  componentDidMount () {
  }

  componentDidUpdate () {
  }

  handleToggle() {
    this.setState({
      open: !this.state.open
    });
  }

  onEmailChange() {

    let route = arguments[0].props.label.toLowerCase();

    if (route === 'home') {
      this.props.router.replace('/');
    } else {
      this.props.router.replace('/' + route);
    }
  }

  onBuySearch() {
    console.log('arg');
  }

  onTest(arg) {
    let route = arg.toLowerCase();

    if (route === 'inicio') {
      this.props.router.replace('/');
    } else {
      this.props.router.replace('/' + route);
    }
  }

  onTest2(arg) {
    this.setState({
      check: arg
    });
  }


  portfolioChange(route) {
    if (route === 'immerse') {
      window.location = 'https://www.github.com/francoabaroa/escape-reality';
    } else {
      window.location = 'https://www.github.com/francoabaroa/' + route;
    }
  }


  render () {
    let self = this;
    let vrView = '';

    if (this.props.router.location.pathname.indexOf('/work') >= 0) {
      console.log('this is rerendering PORT');
      return (
              <div>
              <Work onEmailChange={this.onEmailChange.bind(this)} portfolioChange={this.portfolioChange.bind(this)} router={self.props.router}/>
              <SearchFields onBuySearch={this.onBuySearch.bind(this)}/>
              </div>
      );

    } else if (this.props.router.location.pathname.indexOf('/signin') >= 0) {
      console.log('this is rerendering Signin');
      return (
              <Signin onTest={this.onTest.bind(this)} onEmailChange={this.onEmailChange.bind(this)} router={this.props.router}/>
      );

    } else if (this.props.router.location.pathname.indexOf('/join') >= 0) {
      console.log('this is rerendering Join');
      return (
              <Join onTest={this.onTest.bind(this)} onEmailChange={this.onEmailChange.bind(this)} router={this.props.router}/>
      );

    } else if (this.props.router.location.pathname.indexOf('/contact') >= 0) {
      console.log('this is rerendering Contact');
      return (
              <Contact onEmailChange={this.onEmailChange.bind(this)} router={this.props.router}/>
      );

    } else if (this.props.router.location.pathname.indexOf('/about') >= 0) {
      console.log('this is rerendering CONTACT');
      return (
              <About onEmailChange={this.onEmailChange.bind(this)} router={this.props.router}/>
      );

    } else if (this.props.router.location.pathname.indexOf('/') >= 0) {
      console.log('this is rerendering Inicio');
      return (
              <div>
              <Inicio check = {this.state.check} onEmailChange={this.onEmailChange.bind(this)} onTest={this.onTest.bind(this)} onTest2={this.onTest2.bind(this)} router={this.props.router} />
              <SearchFields check={this.state.check}/>
              </div>
      );

    }
  }
}


export default withRouter(App, { withRef: true });