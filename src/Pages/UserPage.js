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
          // this.props.updateNickname()
          const copyOfCurrentUserData = {...this.state.currentUserData}
          console.log(copyOfCurrentUserData)

          if(copyOfCurrentUserData.collections && copyOfCurrentUserData.collections.length > 0){
            const collections = copyOfCurrentUserData.collections.map(collection => {
              if(collection.id === id) {
                console.log(`the collection id is ${collection.id} and the nickname is ${plantNickname}`)
                collection.nickname = plantNickname
              }
              return collection
            })
  
            copyOfCurrentUserData.collections = collections
          }
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
        {this.props.userCollection.map(collection => 
          <CollectionCard 
            collection={collection} 
            key={collection.id} 
            deleteCollection={this.deleteCollection}
            currentUserData={this.state.currentUserData}
            assignNickname={this.assignNickname}
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