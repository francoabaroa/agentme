import React from 'react';
import { Link, withRouter } from 'react-router';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  fontFamily: 'Orbitron',
  backgroundColor: 'black'
};

const style2 = {
  fontFamily: 'Orbitron',
  color: 'black'
};


export default props => (

  <div className="mui--text-center">
  <div className="signin">
    <h1 className="centerText" onClick={function () {props.onTest('inicio');}}> AgentMe </h1>

    <div className="centerButtons">
    <MuiThemeProvider muiTheme={getMuiTheme()}>
    <TextField
      hintText="Email Field"
      className="wowza"
      floatingLabelText="Email"
      style={style2}
      onChange={event => props.onEmailChange(event)}
    />
    </MuiThemeProvider>
    <br />
    <MuiThemeProvider muiTheme={getMuiTheme()}>
    <TextField
      hintText="Password Field"
      floatingLabelText="Password"
      style={style2}
      type="password"
      onChange={event => props.onPasswordChange(event)}
    />
    </MuiThemeProvider>
    <br />
    <br/>
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <RaisedButton buttonStyle={style} label="Sign In" primary={true} onClick={props.submitFn} />
    </MuiThemeProvider>

    <br/>
    <br/>

    <div>
        <p className="fancyText"> No account yet? </p>
        <Link to="/join" className="fancyText"> Sign up here</Link>
    </div>
    </div>

  </div>
  </div>
);
