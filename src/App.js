import React, { Fragment} from 'react'; 
import './App.css';
import NavBar from './Components/NavBar.js'
import ReactDOM from 'react-dom'
import { Route, Switch, Redirect, Link, BrowserRouter as Router } from 'react-router-dom'
import LandingPage from './Pages/LandingPage.js'
import LoginPage from './Pages/LoginPage.js'
import RegisterPage from './Pages/RegisterPage.js'
import UserPage from './Pages/UserPage.js'
import DirectoryPage from './Pages/DirectoryPage.js'
import Footer from './Components/Footer.js'
import NotFoundPage from './Pages/NotFoundPage'
import ls from 'local-storage'

let PlantsURL = "http://localhost:3000/plants" 
let CollectionsURL = "http://localhost:3000/collections/"
let UsersURL = "http://localhost:3000/users"

class App extends React.Component{

  state = {
    currentUser: null,
    users: [],
    plants: [],
    // collections: [],
    currentUserData: [],
    searchText: "",
    limit: 0,
    filter: "All",
    userCollection: []
  }

  autoLogin = ()=> {
    const storageUser = ls.get("savedUser")
    this.setState({currentUser: storageUser ? storageUser : null , userCollection: storageUser ? storageUser.collections : []})
  }

  updateCurrentUser = (user) => {
    ls.set('savedUser', user)
    this.setState({currentUser: user, userCollection: user.collections})
  }

  setUserCollection = (collection) => {
    this.setState({
      currentUser:collection,userCollection: collection.collections
    })
  }
  
  logOut = () => {
    ls.remove('savedUser')
    this.setState({currentUser: null})
  }
  
  componentDidMount() {
    Promise.all([fetch(UsersURL), fetch(PlantsURL)])
    
    .then(([res1, res2]) => { 
      return Promise.all([res1.json(), res2.json()]) 
    })
    .then(([users, plants]) => {
      this.setState({users})
      this.setState({plants})

    });
    this.autoLogin()
  }

  
  backPlants = () => {
    this.setState({
      limit: this.state.limit - 4
    }) 
  }
  
  changeSearch = (text) => {
    this.setState({searchText: text})
  }


  filteredPlants = () => {
    let filteredPlants = this.state.plants.filter(plant => plant.name.toLowerCase().includes(this.state.searchText.toLowerCase()))
  
    if (this.state.filter !== "All"){
      filteredPlants = filteredPlants.filter(plant => plant.category === this.state.filter)
    }
    return filteredPlants
  }
  
  deleteUserPlant = (userPlant) => {
    console.log(userPlant)
    this.setState({userCollection: this.state.userCollection.filter((filteredPlant) => filteredPlant != userPlant)})
  }

  morePlants = () => {
    this.setState({
      limit: this.state.limit + 4
    }) 
  }

updateFilter = (filter) => {
  console.log(filter)
  this.setState({filter})
}

// updateNickname = (userPlant) => {
//   console.log(userPlant)
//   // const copyOfCurrentUserData = {...this.state.currentUserData}
//   //           const collections = copyOfCurrentUserData.collections.map(collection => {
//   //             if(collection.id === id) {
//   //               console.log(`the collection id is ${collection.id} and the nickname is ${plantNickname}`)
//   //               collection.nickname = plantNickname
//   //             }
//   //             return collection
//   //           })
  
//   //           copyOfCurrentUserData.collections = collections
//   //           this.setState({
//   //               currentUserData: copyOfCurrentUserData
//   //           })
//   //         }
// }


addToCollection = (plant) =>{

  let newCollectionPlant = {
    plant_id: plant.id,
    user_id: this.state.currentUser.id,
    nickname: ""
  }

  let reqPack = {};
  reqPack.method = "POST";
  reqPack.headers = {"Content-Type": "application/json"};
  reqPack.body = JSON.stringify(newCollectionPlant);

  fetch("http://localhost:3000/collections", reqPack)
  .then(res => res.json())
  .then(data => this.setState({userCollection:[data, ...this.state.userCollection]})) 
}

  render()
  {
    const filteredPlants = this.state.plants.filter(plant => plant.name.toLowerCase().includes(this.state.searchText.toLowerCase()))
  return (
      <Fragment>
        <NavBar logOut={this.logOut} currentUser={this.state.currentUser}/>
        <Router/>
          <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route exact path="/login" render={() => (
                  this.state.currentUser == null ? <LoginPage updateCurrentUser={this.updateCurrentUser} setUserCollection={this.setUserCollection} /> : <Redirect to="/user"/>
                )}/>
            <Route exact path="/register" component={RegisterPage}/>
            <Route exact path="/user" render={() => 
              <UserPage 
                currentUser={this.state.currentUser} 
                userCollection={this.state.userCollection} 
                deleteUserPlant={this.deleteUserPlant} 
                setUserCollection={this.setUserCollection}
                // updateNickname={this.updateNickname}
                />}/>
            <Route path="/directory" render={(props) => (
              <DirectoryPage 
                addToCollection={this.addToCollection} 
                currentUser={this.state.currentUser} 
                changeSearch={this.changeSearch} 
                morePlants={this.morePlants} 
                backPlants={this.backPlants} 
                plants={this.filteredPlants().slice(this.state.limit, this.state.limit + 4)}
                limit={this.state.limit}
                plantLength={this.state.plants.length}
                updateFilter={this.updateFilter}
                
              />
            )} />
            <Route component={NotFoundPage}/>
          </Switch>
        <Router/>
        <Footer/>
    </Fragment>
  )
}}

export default App;