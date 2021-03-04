import React from 'react';
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import LoginPage from '../Pages/LoginPage.js'
import RegisterPage from '../Pages/RegisterPage.js'

class NavBar extends React.Component{
    render(){
    return (
      <div>
       {this.props.currentUser ? <button onClick={this.props.logOut}><Link to="/user">Logout</Link></button> : <button><Link to="/login">Login</Link></button>} 
       {this.props.currentUser ? null : <button><Link to="/register">Register</Link></button>}       
       </div>
    )
  }}
  
  export default NavBar;

 