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
// import 'bootstrap/dist/css/bootstrap.min.css';

//house user login state
//house collection state

let PlantsURL = "http://localhost:3000/plants" 
let CollectionsURL = "http://localhost:3000/collections/"
let UsersURL = "http://localhost:3000/users"

class App extends React.Component{

  state = {
    currentUser: null,
    users: [],
    plants: [],
    collections: [],
    currentUserData: [],
    searchText: ""
  }

  updateCurrentUser = (user) => {
    this.setState({currentUser: user})
  }

  logOut = () => {
    this.setState({currentUser: null})
  }
  
  componentDidMount() {
    Promise.all([fetch(UsersURL), fetch(PlantsURL), fetch(CollectionsURL)])

      .then(([res1, res2, res3]) => { 
         return Promise.all([res1.json(), res2.json(), res3.json()]) 
      })
      .then(([users, plants, collections]) => {
        this.setState({users})
        this.setState({plants})
        this.setState({collections})
      });
}

changeSearch = (text) => {
  this.setState({searchText: text})
}

addToCollection = (plant) =>{
  // console.log(plant)
  
  let newCollectionPlant = {
    plant_id: plant.id,
    user_id: this.state.currentUser.id,
    nickname: ""
  }

  let reqPack = {};
  reqPack.method = "POST";
  reqPack.headers = {"Content-Type": "application/json"};
  reqPack.body = JSON.stringify(newCollectionPlant);

  fetch("http://localhost:3000/collections", reqPack);

  let updatedCollection = [this.state.collection, plant];
  this.setState({collection: updatedCollection}) 
}

// deleteCollection = (collection) =>{
//   // console.log(collection.id)
//   let chosenItem = collection.id

//   fetch(CollectionsURL + collection.id, {
//     method: "DELETE",
//   })
//   .then(res => res.json())
//   .then(() => {
//     console.log(this.state.collections.filter((filteredCollection) => filteredCollection != collection))
//     this.setState({
//       collections: this.state.collections.filter((filteredCollection) => filteredCollection != collection)
//     })
//   })
// }



//if the URL is /login,
//we want to LoginPage if currentUser is null
//if currentUser isn't null, we want to redirect
//to /user
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
            this.state.currentUser == null ? <LoginPage updateCurrentUser={this.updateCurrentUser} /> : <Redirect to="/user"/>
          )}/>
      <Route exact path="/register" component={RegisterPage}/>
      <Route exact path="/user" render={() => <UserPage currentUser={this.state.currentUser}/>}/>
      <Route path="/directory" render={(props) => (
      <DirectoryPage addToCollection={this.addToCollection} currentUser={this.state.currentUser} changeSearch={this.changeSearch} plants={filteredPlants}/>
      )}
      />
      <Route component={NotFoundPage}/>
    </Switch>
    <Router/>
    <Footer/>
    </Fragment>
  )
}}

export default App;