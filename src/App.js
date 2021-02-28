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

//house user login state
//house collection state

let PlantsURL = "http://localhost:3000/plants" 
let CollectionsURL = "http://localhost:3000/collections"
let UsersURL = "http://localhost:3000/users"

class App extends React.Component{

  state = {
    currentUser: null,
    users: [],
    plants: [],
    collections: []
  }

  updateCurrentUser = (user) => {
    this.setState({currentUser: user})
  }
  // logInUser = (username) => {
  //   let current = this.state.users.find(
  //     (user) => user.username === username
  //     );
  //     this.setState({ currentUser: current });
  //   };

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

addToCollection(){
  console.log("it works")
}

  render(){
  return (
      <Fragment>
      <NavBar/>
    <Router/>
    <Switch>
      <Route exact path="/" component={LandingPage}/>
      <Route exact path="/login" render={() => <LoginPage updateCurrentUser={this.updateCurrentUser}/>}/>
      <Route exact path="/register" component={RegisterPage}/>
      <Route exact path="/user" component={UserPage}/>
      <Route exact path="/directory" component={DirectoryPage}/>
      <Route component={NotFoundPage}/>
    </Switch>
    <Router/>
    <Footer/>
    </Fragment>
  )
}}

export default App;


//one way of doing it
{/* <Router>
  <div>
  <Route exact path="/" component={LandingPage} />
  
  <Route path="/login" render={(props) => (
    <LoginPage plants={this.state.users} />
    )}/>
    
    <Route path="/register" component={RegisterPage} />
    
    <Route path="/user" component={UserPage} />
    
    <Route path="/directory" render={(props) => (
      <DirectoryPage plants={this.state.plants} addToCollection={this.addToCollection} />
      )}
      />
      </div>
    </Router> */}

//second way of doing it
    // <Fragment>
    //   <NavBar/>
    // <Router/>
    // <Switch>
    //   <Route exact path="/" component={LandingPage}/>
    //   <Route exact path="/login" component={LoginPage}/>
    //   <Route exact path="/register" component={RegisterPage}/>
    //   <Route exact path="/user" component={UserPage}/>
    //   <Route exact path="/directory" component={DirectoryPage}/>
    //   <Route component={NotFoundPage}/>
    // </Switch>
    // <Router/>
    // <Footer/>
    // </Fragment>