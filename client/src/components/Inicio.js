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
import DropDownMenu from 'material-ui/DropDownMenu';
import Avatar from 'material-ui/Avatar';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import ReactDOM from 'react-dom';
import Tabs from 'muicss/lib/react/tabs';
import Tab from 'muicss/lib/react/tab';
import Container from 'muicss/lib/react/container';


export default props => {

  const divStyle = {
    color: 'blue',
    backgroundColor: 'red'
  };



  return (
      <div>
            <div className="mui--text-right">
                <MuiThemeProvider muiTheme={getMuiTheme()}>

                <Toolbar className="mui--text-right" style={{
      textAlign: 'right',
      color: '#000',
      fontSize: '3px'
    }}>
                  <ToolbarGroup style={{
      textAlign: 'right',
      color: '#000'
    }}>
                  <span>
                    <h3 className="logo">AgentMe</h3>
                  </span>

                  <span className="mui--text-right">
                    <button className="testyy">
                    (305) 444-4000
                    </button>
                    <IconMenu
                                          iconButtonElement={
                                              <button className="testyy">
                                              Buy
                                              </button>
                                          }
                                        >
                                          <MenuItem primaryText="Buy with AgentMe" />
                                          <MenuItem primaryText="Affordability Calculator" />
                                          <MenuItem primaryText="Home Buying Guide" />
                                          <MenuItem primaryText="Find Mortgage Rates" />
                                          <MenuItem primaryText="Classes and Events" />
                                        </IconMenu>
                    <IconMenu
                                          iconButtonElement={
                                              <button className="testyy">
                    Sell
                    </button>
                                          }
                                        >
                                          <MenuItem primaryText="Sell with AgentMe" />
                                          <MenuItem primaryText="Affordability Calculator" />
                                        </IconMenu>
                    <button onClick={function () {props.onTest('Real Estate Agents');}} className="testyy">
                    Real Estate Agents
                    </button>
                    <button onClick={function () {props.onTest('SignIn');}} className="testyy">
                    Sign In
                    </button>
                    <button onClick={function () {props.onTest('Join');}} className="testyy">
                    Join
                    </button>
                    </span>
                  </ToolbarGroup>
                </Toolbar>
                 </MuiThemeProvider>
                </div>

      <br/>
      <br/>
      <br/>
        <Container fluid={true}>
          <span>
            <div className="mui--text-display4 mui--text-center">AgentMe</div>
          </span>
        </Container>


              <h3 className="mui--text-center">real estate done right</h3>

              <Container fluid={true} className="mui--text-center">

              <button className="testyt" onClick={function () {props.onTest2('fak');}}>
              Buy
              </button>

              <button className="testyt" onClick={function () {props.onTest2('fak1');}}>
              Sell
              </button>

              <button className="testyt" onClick={function () {props.onTest2('fak2');}}>
              See Home Estimate
              </button>

        </Container>

      </div>
  );
};
