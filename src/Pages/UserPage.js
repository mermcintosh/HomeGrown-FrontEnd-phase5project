import React from 'react'; 
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import CollectionCard from '../Components/CollectionCard'
import EditForm from '../Components/EditForm'
let CollectionsURL = "http://localhost:3000/collections/"
// import UserSideBar from "../Components/UserSideBar"

class UserPage extends React.Component{

  state = {
    currentUserData: [],
  }

    componentDidMount(){
      this.props.hideShell(false)
      if (this.props.currentUser){
        fetch(`http://localhost:3000/users/${this.props.currentUser.id}`)
        .then(res => res.json())
        .then(currentUserData => {
        // let UserCollection = this.props.setUserCollection(currentUserData)
        this.setState({currentUserData})
      })
      }
    }

    deleteCollection = (collection) =>{
      let plantCollection = collection
      fetch(CollectionsURL + collection.id, {
        method: "DELETE",
      })
      .then(res => res.json())
      .then((userPlant) => {
        this.props.deleteUserPlant(plantCollection)
      })
    }


  
    render(){
    return ( 
      <div>
      
      {this.props.currentUser ?
        <div>
        <h1>Hello, {this.props.currentUser.username}</h1>
        <button><Link to="/directory">Add a new plant to my collection!</Link></button>
        {this.props.userCollection.map(collection => 
          <CollectionCard 
            collection={collection} 
            key={collection.id} 
            deleteCollection={this.deleteCollection}
            currentUserData={this.state.currentUserData}
            assignNickname={this.props.assignNickname}
            deleteUserPlant={this.props.deleteUserPlant}
          />
        )}
        </div>
        :
        <h1>Please login to see your Plant Collection!</h1>
      }
      </div>
    )


  }}
  
  export default UserPage;