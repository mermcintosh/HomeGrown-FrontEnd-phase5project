import React from 'react'; 
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'


class UserPage extends React.Component{
    render(){
    return ( 
      <div>
      {/* this.props.currentUser ?
      <h1>Hello, {this.props.currentUser.username}</h1>
      //eventually show currentUser's plants
      //link button whatever to DirectoryPage
      <button>hello</button>
      :null */}
      {this.props.currentUser ?
        <div>
        <h1>Hello, {this.props.currentUser.username}</h1>
        <button><Link to="/directory">Add a new plant to my collection!</Link></button>
        </div>
        :
        <h1>Please login to see your Plant Collection!</h1>
      }
      </div>
    )


  }}
  
  export default UserPage;