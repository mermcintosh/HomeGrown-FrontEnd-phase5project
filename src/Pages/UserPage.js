import React from 'react'; 
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import CollectionCard from '../Components/CollectionCard'


class UserPage extends React.Component{
  state = {
    currentUserData: []
  }

    componentDidMount(){
      
      fetch(`http://localhost:3000/users/${this.props.currentUser.id}`)
      .then(res => res.json())
      .then(currentUserData => {
        this.setState({currentUserData})
      })
    }

    render(){
    return ( 
      <div>
      {this.props.currentUser ?
        <div>
        <h1>Hello, {this.props.currentUser.username}</h1>
        <button><Link to="/directory">Add a new plant to my collection!</Link></button>
        {this.state.currentUserData.collections && this.state.currentUserData.collections.map(collection => <CollectionCard collection={collection} deleteCollection={this.props.deleteCollection}/>)}
        {console.log(this.state.currentUserData.collections)}
        </div>
        :
        <h1>Please login to see your Plant Collection!</h1>
      }
      </div>
    )


  }}
  
  export default UserPage;