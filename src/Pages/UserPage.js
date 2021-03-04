import React from 'react'; 
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import CollectionCard from '../Components/CollectionCard'
import EditForm from '../Components/EditForm'
let CollectionsURL = "http://localhost:3000/collections/"

class UserPage extends React.Component{
  state = {
    currentUserData: [],
  }

    componentDidMount(){
      if (this.props.currentUser){
        fetch(`http://localhost:3000/users/${this.props.currentUser.id}`)
        .then(res => res.json())
        .then(currentUserData => {
        this.setState({currentUserData})
      })
      }
    }

    deleteCollection = (collection) =>{
      fetch(CollectionsURL + collection.id, {
        method: "DELETE",
      })
      .then(res => res.json())
      .then(() => {
        let newCurrentUserData = {...this.state.currentUserData}
        newCurrentUserData.collections = this.state.currentUserData.collections.filter((filteredCollection) => filteredCollection.id !== collection.id)

        this.setState({
          currentUserData: newCurrentUserData
        })
      })
    }

   
    assignNickname = (plantNickname, id) => {
         let plantCollection = {
            nickname: plantNickname
        };

        let reqPackage = {
                    method: 'PATCH',
                    headers: {
                      "Content-Type": "application/json"
                    },
                    body: JSON.stringify(plantCollection)
                  }

        fetch(CollectionsURL + id, reqPackage)
        .then(res => res.json())
        .then(newNickname => {
          console.log("State")
          console.log(this.state.currentUserData)
          const copyOfCurrentUserData = {...this.state.currentUserData}
          console.log("Copy of state")
          console.log(copyOfCurrentUserData)
          // const collections = copyOfCurrentUserData.collections.map(collection => collection.id == id ? {...collection, collection.nickname : newNickname} : collection)
          const collections = copyOfCurrentUserData.collections.map(collection => {
            if(collection.id === id) {
              console.log(`the collection id is ${collection.id} and the nickname is ${plantNickname}`)
              collection.nickname = plantNickname
            }
            return collection
          })

          copyOfCurrentUserData.collections = collections
          console.log("After updating the collection")
          console.log(copyOfCurrentUserData)
          this.setState({
              currentUserData: copyOfCurrentUserData
          })
        })
    }
  
    render(){
    return ( 
      <div>
      {this.props.currentUser ?
        <div>
        <h1>Hello, {this.props.currentUser.username}</h1>
        <button><Link to="/directory">Add a new plant to my collection!</Link></button>
        {this.state.currentUserData.collections && this.state.currentUserData.collections.map(collection => 
          <CollectionCard 
            collection={collection} 
            key={collection.id} 
            deleteCollection={this.deleteCollection}
            currentUserData={this.state.currentUserData}
            assignNickname={this.assignNickname}
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