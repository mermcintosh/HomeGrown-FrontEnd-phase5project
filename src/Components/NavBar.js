import React from 'react';
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import LoginPage from '../Pages/LoginPage.js'
import RegisterPage from '../Pages/RegisterPage.js'

class NavBar extends React.Component{
    render(){
    return (
      <div>
       <button><Link to="/login">Login</Link></button>
       <button><Link to="/register">Register</Link></button>      
      </div>
    )
  }}
  
  export default NavBar;