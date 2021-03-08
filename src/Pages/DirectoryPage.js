import React from 'react';
import DirectoryCard from '../Components/DirectoryCard.js'
import Search from '../Components/Search.js'
import MoreButton from '../Components/MoreButton.js'
import BackButton from '../Components/BackButton.js'
import { Grid } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';



const styles = theme => ({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px",
    objectFit: "contain"

  },

  // background: {
  //   backgroundImage: 'url(https://images.unsplash.com/photo-1463936575829-25148e1db1b8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8cGxhbnRzfGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60)',
  //   backgroundSize: 'cover',
  //   backgroundRepeat: 'no-repeat',
  //   backgroundPosition: 'center',
  // },

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
    // objectAlign: "right"
  },
});

class DirectoryPage extends React.Component{

  componentDidMount(){
    this.props.hideShell(false)
  }

    render(){
      const {classes} = this.props;
    return (
      <div className={classes.background}>
       <h1>Find your next plant here!</h1>
        <Search changeSearch={this.props.changeSearch} updateFilter={this.props.updateFilter} />
        <br/>
        <Grid container spacing={4} className={classes.gridContainer} justify="center">
      <div>
       <GridList item xs={12} sm={6} md={4} >
       {this.props.plants.map(plant => <DirectoryCard plant={plant} key={plant.id} addToCollection={this.props.addToCollection} updateCurrentUser={this.props.updateCurrentUser} setUserCollection={this.props.setUserCollection}/>)}
       </GridList>
       {this.props.limit + 8 < this.props.plantLength ? <MoreButton morePlants={this.props.morePlants} plants={this.props.plants}/> : null}
       {this.props.limit == 0 ? null : <BackButton backPlants={this.props.backPlants} plants={this.props.plants}/>} 
      </div>
      </Grid>
      </div>
      
    )
  }}
  
  export default withStyles(styles)(DirectoryPage);



  // <div className="container"> right above <Search


  // <IconButton>
  //         <SearchIcon />
  //       </IconButton>