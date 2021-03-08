import React from 'react';
import PropTypes from 'prop-types';
import {fade, withStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import Link from '@material-ui/core/Link';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import LoginPage from '../Pages/LoginPage.js'
import RegisterPage from '../Pages/RegisterPage.js'
import Avatar from '@material-ui/core/Avatar';
import Home from '@material-ui/icons/Home';
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';



const styles = theme => ({
  toolbar: {
    // border: `1px solid ${theme.palette.divider}`,
    // padding: "20px",
    // margin: 20,
    marginTop: "5px",
  marginBottom: "15px",
  marginRight: "20px",
  marginLeft: "20px"
  },

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#91c292",
  },

  buttons: {
    margin: theme.spacing(3, 0, 2),
    background: 'linear-gradient(45deg, #79a67a 30%, #25853f 90%)',
    // '&:hover': {
    //   backgroundColor: 'linear-gradient(45deg, #25853f 30%, #79a67a 90%)',
    // },
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(107, 125, 108)',
    color: 'white',
    height: 60,
    width: 150,
    padding: '0 30px',
    fontSize: 15,
   
  
  },


  toolbarTitle: {
    flex: 1,
    fontSize: 70,
    maxWidth: 4000
  },

  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },

  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
});


class NavBar extends React.Component{
  
  render(){
    const {classes} = this.props
    // const { sections, title } = this.props;
  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
      <Avatar >
        <Home color="white" />
          </Avatar>
          {this.props.currentUser ?
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
          style={{ fontFamily: 'Vidaloka' }}
        >
          HomeGrown
        </Typography>
        :
        <Typography
        component="h2"
        variant="h5"
        color="inherit"
        align="center"
        noWrap
        className={classes.toolbarTitle}
        style={{ fontFamily: 'Vidaloka' }}
      >
       
      </Typography>
        }
        
        &nbsp;&nbsp;&nbsp;
        {this.props.currentUser ? 
        
        <Button onClick={this.props.logOut} component={Link} to="/thankyou" className={classes.buttons} variant="outlined" size="small">
          Sign out
        </Button>
        :
        <Button component={Link} to="/login" variant="outlined" size="small" className={classes.buttons}>Sign in</Button>}

        &nbsp;&nbsp;&nbsp;
        
        {this.props.currentUser ? null : <Button component={Link} to="/register"  className={classes.buttons} variant="outlined" size="small">
          Register
        </Button>}

      </Toolbar>
     
    </React.Fragment>
  );
}
}
// NavBar.propTypes = {
//   sections: PropTypes.array,
//   title: PropTypes.string,
// };


export default withStyles(styles)(NavBar)










// import React from 'react';
// import ReactDOM from 'react-dom'
// import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
// import LoginPage from '../Pages/LoginPage.js'
// import RegisterPage from '../Pages/RegisterPage.js'

// class NavBar extends React.Component{
//     render(){
//     return (
//       <div>
//        {this.props.currentUser ? <button onClick={this.props.logOut}><Link to="/user">Logout</Link></button> : <button><Link to="/login">Login</Link></button>} 
//        {this.props.currentUser ? null : <button><Link to="/register">Register</Link></button>}       
//        </div>
       
//     )
//   }}
  
//   export default NavBar;

 