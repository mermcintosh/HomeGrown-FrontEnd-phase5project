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
import ls from 'local-storage'


//house user login state
//house collection state

let PlantsURL = "http://localhost:3000/plants" 
let CollectionsURL = "http://localhost:3000/collections/"
let UsersURL = "http://localhost:3000/users"

class App extends React.Component{

  state = {
    currentUser: ls.get("savedUser") ? ls.get("savedUser"): null,
    users: [],
    plants: [],
    collections: [],
    currentUserData: [],
    searchText: "",
    limit: 0,
    filter: "All"
  }

  
  updateCurrentUser = (user) => {
    ls.set('savedUser', user)
    this.setState({currentUser: user})
  }
  
  logOut = () => {
    ls.remove('savedUser')
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
  
  morePlants = () => {
    this.setState({
      limit: this.state.limit + 4
    }) 
  }

updateFilter = (filter) => {
  console.log(filter)
  this.setState({filter})
}



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

  fetch("http://localhost:3000/collections", reqPack);

  let updatedCollection = [this.state.currentUserData.collections, plant];
  this.setState({collection: updatedCollection})
}
// addToCollection = (plant) =>{
  
//   let newCollectionPlant = {
//     plant_id: plant.id,
//     user_id: this.state.currentUser.id,
//     nickname: ""
//   }

//   let reqPack = {};
//   reqPack.method = "POST";
//   reqPack.headers = {"Content-Type": "application/json"};
//   reqPack.body = JSON.stringify(newCollectionPlant);

//   fetch("http://localhost:3000/collections", reqPack)
//     .then(res => res.json())
//     .then(res => {
//       res.plant = plant
//       let updatedCollection = [...this.state.collections, res];
//       this.setState({collections: updatedCollection}) 
//     })
//   }

//   handleSubmit(e){
//     e.preventDefault()
//     let newPokemon = {
//         name:  this.state.pokeName,
//         sprite: this.state.pokeImg,
//         type: this.state.pokeType,
//         weight: this.state.pokeWeight
//     }

//     let reqObj = {}
//         reqObj.headers = {"Content-Type": "application/json"}
//         reqObj.method = "POST"
//         reqObj.body = JSON.stringify(newPokemon)

//     fetch('http://localhost:3000/pokemon', reqObj)
//         .then(r => r.json())
//         .then(newPokemon => {
//             this.props.addNewPoke(newPokemon)
//             e.target.reset()
//         })
    
// }




  // addToCart = (item) => { //item is the obj
//   let addCart
//   addCart = {
//       item_id: item.id,
//       cart_id: 9 //grab from backend to make dynamic?/ Cart.first after seeding
//   };
//   let reqPack = {};
//   reqPack.method = "POST";
//   reqPack.headers = { "Content-Type": "application/json" };
//   reqPack.body = JSON.stringify(addCart);
//   fetch("http://localhost:3000/cart_items", reqPack)
//       .then(res => res.json())
//       .then(res => {
//           res.item = item
//           let updateCart = [...this.state.carts, res]
//           this.setState({ carts: updateCart });
//           console.log(res)
//       })
// }

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