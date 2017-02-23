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


const appSearch = (route, mainSearchQ, secSearchQuery) => {
  console.log('YES', mainSearchQ, route, secSearchQuery);

  $.post({
     url: '/' + route,
     data: JSON.stringify({
       searchQuery: mainSearchQ,
       secSearchQuery: secSearchQuery
     }),
     contentType: 'application/json',
     success: data => {
      console.log(data, 'GREAT SUCCESS BOY!');
     },
     error: error => {
       console.error('error in get upload', error);
       $('.error').show();
     },
   });
}

export default props => {
  console.log(props.check, 'here', props, props);



  if (props.check === 'fak') {
    return (
        <div className="search-bar form-inline mui--text-center">
          <input className="form-control" type="text" placeholder="City, Address, School, Agent, Zip" onChange={(event) => console.log(event.target.value)} />
          <button className="btn hidden-sm-down" onClick={() => appSearch("buysearch", $("input.form-control").val())}>
            <span className="glyphicon glyphicon-search"></span>
          </button>
        </div>
    );
  } else if (props.check === 'fak1') {
    return (
        <div>
        <div className="search-bar form-inline mui--text-center">
          <input className="form-control" type="text" placeholder="Enter Your Street Address"/>
        </div>
        <div className="search-bar form-inline mui--text-center">
          <input className="form-control zipCode" type="number" placeholder="Zipcode" />
        </div>
        <div className="search-bar form-inline mui--text-center">
          <button onClick={() => appSearch("sellsearch", $("input.form-control").val(), $("input.form-control.zipCode").val())}>
            Next
          </button>
        </div>
        </div>
    );
  } else if (props.check === 'fak2') {
    return (
        <div className="search-bar form-inline mui--text-center">
          <input className="form-control" type="text" placeholder="Enter Your Street Address" />
          <button className="btn hidden-sm-down" onClick={() => appSearch("estimate", $("input.form-control").val(), $("input.form-control.zipCode").val())}>
            <span className="glyphicon glyphicon-search"></span>
          </button>
        </div>
    );
  }

  return (
      <div>


              <h3 className="mui--text-center orange">rete done right</h3>


      </div>
  );


};
