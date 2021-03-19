import React from 'react';
import DirectoryCard from '../Components/DirectoryCard.js'
import Search from '../Components/Search.js'
import MoreButton from '../Components/MoreButton.js'
import BackButton from '../Components/BackButton.js'
import { Grid } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import Container from '@material-ui/core/Container';




const styles = theme => ({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px",
    objectFit: "contain",
    

  },

 background: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1477554193778-9562c28588c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }, 

  buttons: {
    margin: theme.spacing(3, 0, 2),
    background: 'linear-gradient(45deg, #79a67a 30%, #25853f 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(107, 125, 108)',
    color: 'white',
    height: 60,
    width: 150,
    padding: '0 30px',
    fontSize: 15,
  },

  title:{
    textAlign: "left",
    padding: 40,
    fontSize: 45
  },

  container: {
    minHeight: "100vh",
    overflow: "hidden",
    display: "flex",
    alignItems: "stretch",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
    
  },

  pagination: {
    maxWidth: "92%",
    display: "flex",
    justifyContent: "space-between",
    margin: "0 auto"
  }
});

class DirectoryPage extends React.Component{

  componentDidMount(){
    this.props.hideShell(false)
  }

    render(){
      const {classes} = this.props;
    return (
      <div className={classes.background}>
        <Search changeSearch={this.props.changeSearch} updateFilter={this.props.updateFilter} />
        <br/>
        <Container container spacing={4} className={classes.container} justify="center" maxWidth="false">
            {this.props.plants.map(plant => 
              <DirectoryCard 
                plant={plant} 
                key={plant.id} 
                addToCollection={this.props.addToCollection} 
                updateCurrentUser={this.props.updateCurrentUser} 
                setUserCollection={this.props.setUserCollection}/>
            )}
        </Container>
        <div className={classes.pagination}>
            {this.props.limit == 0 ? null : <BackButton backPlants={this.props.backPlants} plants={this.props.plants}/>} 
            {this.props.limit + 8 < this.props.plantLength ? <MoreButton morePlants={this.props.morePlants} plants={this.props.plants}/> : null}
        </div>
      </div>
      
    )
  }}
  
  export default withStyles(styles)(DirectoryPage);