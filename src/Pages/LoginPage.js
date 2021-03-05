import React from 'react'; 
import { Redirect } from "react-router-dom"
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { styled } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';

class LoginPage extends React.Component{

    state = {
      username: "",
      password: ""
    }


    handleChange = (e) => {
      this.setState({[e.target.name]: e.target.value})
    }

    handleLoginSubmit = (e) => {
      e.preventDefault()
      fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type" : "application/json",
          "Accept" : "application/json"
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        })
      }).then(res => res.json())
      .then(userData => {
       this.props.updateCurrentUser(userData)
      })
    }


   

    // const useStyles = withStyles((theme) => ({
    //   paper: {
    //     marginTop: theme.spacing(8),
    //     display: 'flex',
    //     flexDirection: 'column',
    //     alignItems: 'center',
    //   },
    //   avatar: {
    //     margin: theme.spacing(1),
    //     backgroundColor: theme.palette.secondary.main,
    //   },
    //   form: {
    //     width: '100%', // Fix IE 11 issue.
    //     marginTop: theme.spacing(1),
    //   },
    //   submit: {
    //     margin: theme.spacing(3, 0, 2),
    //   },
    // }));

    

  
    render(){
      // const classes = this.props;

    return (
      <div>
       <form
    onSubmit={this.handleLoginSubmit}
    size="mini"
    key="mini"
    loading={this.props.authenticatingUser}
    error={this.props.failedLogin}
    >

    <input 
    label="username"
    placeholder="username"
    name="username"
    onChange={this.handleChange}
    value={this.state.username} 
    />

   {this.props.failedLogin && 
   <div>{this.props.error}</div>}

    <input 
    type="password"
    label="password"
    placeholder="password"
    name="password"
    onChange={this.handleChange}
    value={this.state.password}
    />

    <button type="submit" value="Submit">Login</button>
</form>
      </div>  
    )
  }}
  
  export default LoginPage;
  //export default withStyles(useStyles)(LoginPage)


 