import React from 'react'; 
import './App.css';
import NavBar from './Components/NavBar.js'
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import LandingPage from './Pages/LandingPage.js'
import LoginPage from './Pages/LoginPage.js'
import RegisterPage from './Pages/RegisterPage.js'
import UserPage from './Pages/UserPage.js'
import DirectoryPage from './Pages/DirectoryPage.js'
import Footer from './Components/Footer.js'

//house user login state
//house collection state

let PlantsURL = "http://localhost:3000/plants" 
let CollectionsURL = "http://localhost:3000/collections"
let UsersURL = "http://localhost:3000/users"

class App extends React.Component{

  state = {
    users: [],
    plants: [],
    collections: []
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

  render(){
  return (
    <div>
      <NavBar/>
     <Router>
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/user" component={UserPage} />
      <Route path="/directory" render={(props) => (
          <DirectoryPage plants={this.state.plants} />
        )}
      />
    </div>
    </Router>
    <Footer/>
)
    </div>
  )
}}

export default App;
