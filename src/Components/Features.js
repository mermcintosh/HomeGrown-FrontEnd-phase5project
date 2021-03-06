import React from "react"
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  image: {
      width: 500,
      height: 450
  }
});

class Features extends React.Component{
    render(){
        const {classes} = this.props
    return (
        <div className={classes.root}>
            <h1>Features</h1>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
              <h1>Plant database</h1>
              <img src="https://images.unsplash.com/photo-1487798452839-c748a707a6b2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=975&q=80"/>
              <h2>Get access to a huge database of plants and learn how to care for them with just a click of a button! Through filters and a search bar, you don't have to scroll through plant after plant no more!</h2>
            </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
              <h1>Profile</h1>
              <img src="https://images.unsplash.com/photo-1574915960598-2f3696e8556b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80"/>
              <h2>You no longer have to keep track on care instructions and your personal plants again! With your own personal profile, you can be sure that killing plants is behind you.</h2>
            </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
              <h1>Customize</h1>
              <img src="https://images.unsplash.com/photo-1521334884684-d80222895322?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"/>
              <h2>With your profile you can customize your plant's nickname and soon, we will be adding a feature where you can leave notes for your personal plants. Coming June 2021.</h2>
        </Paper>
        </Grid>
    
      </Grid>
    </div>
    );
  }}
  
  export default withStyles(styles)(Features);
