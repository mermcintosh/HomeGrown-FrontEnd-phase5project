import React from 'react'; 
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import CollectionCard from '../Components/CollectionCard'
import EditForm from '../Components/EditForm'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

let CollectionsURL = "http://localhost:3000/collections/"

const styles = theme => ({

  container: {
    backgroundColor: '#6a946b',
    height: "100vh"
  }
})

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
      const {classes} = this.props
    return ( 

      <React.Fragment>
      <CssBaseline />
      <Container className={classes.container} maxWidth="xl" >
        <Typography component="div" >
          Hello, {this.props.currentUser.username}
          </Typography>
      </Container>
      </React.Fragment>
    
    )


  }}
  
  export default withStyles(styles)(UserPage)