import React from 'react';
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import LoginPage from '../Pages/LoginPage.js'
import RegisterPage from '../Pages/RegisterPage.js'

class NavBar extends React.Component{
    render(){
    return (
      <div>
       <Router><Link to="/login"><button>Login</button></Link>
       <button>Register</button>
       </Router>
      </div>
    )
  }}
  
  export default NavBar;