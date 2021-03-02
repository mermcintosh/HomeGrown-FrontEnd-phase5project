import React from 'react'; 
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import CollectionCard from '../Components/CollectionCard'


class UserPage extends React.Component{
    render(){
    return ( 
      <div>
      {this.props.currentUser ?
        <div>
        <h1>Hello, {this.props.currentUser.username}</h1>
        <button><Link to="/directory">Add a new plant to my collection!</Link></button>
        {/* {this.props.collections.map(collection => <CollectionCard collection={collection} deleteCollection={this.props.deleteCollection}/>)} */}
        </div>
        :
        <h1>Please login to see your Plant Collection!</h1>
      }
      </div>
    )


  }}
  
  export default UserPage;