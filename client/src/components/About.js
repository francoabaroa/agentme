import React from 'react';
import { Link, withRouter } from 'react-router';
import $ from 'jquery';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from 'material-ui/CircularProgress';
import LinearProgress from 'material-ui/LinearProgress';
import FlatButton from 'material-ui/FlatButton';

import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Avatar from 'material-ui/Avatar';

import Drawer from 'material-ui/Drawer';

import ReactDOM from 'react-dom';
import Tabs from 'muicss/lib/react/tabs';
import Tab from 'muicss/lib/react/tab';
import Container from 'muicss/lib/react/container';


export default props => {

  return (
      <div>


      <span className="mui--text-left">
      <MuiThemeProvider muiTheme={getMuiTheme()}>
      <RaisedButton label="AgentMe">
      </RaisedButton>
      </MuiThemeProvider>
      </span>

      <span className="mui--text-right">
      <Tabs defaultSelectedIndex={1}>
              <Tab value="pane-1" label="Home" onActive={props.onEmailChange}></Tab>
              <Tab value="pane-2" label="About" onActive={props.onEmailChange}></Tab>
              <Tab value="pane-3" label="Work" onActive={props.onEmailChange}></Tab>
              <Tab value="pane-4" label="Contact" onActive={props.onEmailChange}></Tab>
      </Tabs>
      </span>

      <br/>
      <br/>
      <br/>
        <Container fluid={true}>
          <span>
            <div className="mui--text-display4 mui--text-center">agentME</div>
          </span>
        </Container>

        {/*
        <div className='navBar'>
        <Tabs defaultSelectedIndex={0} justified={true}>
               <Tab className="mui--text-white" value="pane-1" label="Inicio" onActive={props.onEmailChange}></Tab>
               <Tab className="mui--text-white" value="pane-2" onActive={props.onEmailChange} label="Servicios"></Tab>
               <Tab value="pane-3" label="Clientes" onActive={props.onEmailChange}></Tab>
               <Tab value="pane-4" label="Contacto" onActive={props.onEmailChange}></Tab>
             </Tabs>
        </div>
      */}


              <h3 className="mui--text-center orange">real estate done right</h3>


      </div>
  );
};
