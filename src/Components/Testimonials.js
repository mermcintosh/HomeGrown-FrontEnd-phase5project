import React from "react"
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  root: {
    flexGrow: 1,
    color: theme.palette.text.secondary,
  },
  feature: {
      textAlign: "center",
      fontSize: 100,
      color: theme.palette.text.secondary,
      padding: 30
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  featureImg: {
      width: 500,
      height: 450
  },
  testimonials: {
    position: 'relative',
    backgroundColor: "#c7c5c3",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  testimonialImg:{
    borderRadius: "50%",
    width: 275,
    height: 250,
    display: "block",
    background: `url('https://cdn.icon-icons.com/icons2/1186/PNG/512/1490135017-visa_82256.png') `,
    backgroundPosition: "center",
    backgroundSize: "auto 80px",
    textAlign: 'center'
  },

});

class Testimonials extends React.Component{
    render(){
        const {classes} = this.props
    return (
        <Paper className={classes.testimonials}>
        <div className={classes.root}>
            <h1 className={classes.feature}>What People Are Saying</h1>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
              <h1>Tess</h1>
              <img className={classes.testimonialImg} src="https://images.unsplash.com/photo-1611432579699-484f7990b127?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"/>
              <h2>I have wasted so much money on plants UNTIL I discovered Homegrown.</h2>
            </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
              <h1>Kara</h1>
              <img className={classes.testimonialImg} src="https://images.unsplash.com/photo-1589935308764-6abbc2ac1dc3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"/>
              <h2>Super easy and extremely useful tool! Highly recommend!</h2>
            </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
              <h1>Luke</h1>
              <img className={classes.testimonialImg} src="https://images.unsplash.com/photo-1525818918160-9ceba31508da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"/>
              <h2>Whether my family believes me or not, I now have a green thumb thanks to Homegrown.</h2>
        </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
              <h1>Monica</h1>
              <img className={classes.testimonialImg} src="https://images.unsplash.com/photo-1579809101675-9eb77f77fab0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"/>
              <h2>My plants are already looking healthier and stronger!</h2>
        </Paper>
        </Grid>
        
    
      </Grid>
    </div>
    </Paper>
    );
  }}
  
  export default withStyles(styles)(Testimonials);