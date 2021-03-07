import React from "react"
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  root: {
    flexGrow: 1,
    color: '#f0f7ed',
    margin: 50,
    fontFamily: "Barlow Condensed"
  },

  feature: {
      textAlign: "center",
      fontSize: 100,
      color: "#688f69",  
  },

  name:{
      fontSize: 50
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: '#f0f7ed',
  },

  featureImg: {
      width: 500,
      height: 450
  },

  testimonial: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    color: theme.palette.text.secondary,
    borderRadius: 50,
    margin: 20, 
  },

  testimonials: {
    position: 'relative',
    backgroundColor: "#e3e2e1",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: 40,
    margin: 40
  },
  
  testimonialImg:{
    borderRadius: "50%",
    width: 375,
    height: 350,
    display: "block",
    background: `url('https://cdn.icon-icons.com/icons2/1186/PNG/512/1490135017-visa_82256.png') `,
    backgroundPosition: "center",
    backgroundSize: "auto 80px",
    textAlign: 'center',
    objectFit: 'cover',
  },

  words: {
    textAlign:'center'
  }

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
          <Paper className={classes.testimonial}>
              <h1 className={classes.name}>Tess</h1>
              <img className={classes.testimonialImg} src="https://images.unsplash.com/photo-1611432579699-484f7990b127?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"/>
              <br/>
              <h2 className={classes.words}>I have wasted so much money on plants UNTIL I discovered Homegrown.</h2>
            </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.testimonial}>
              <h1 className={classes.name}>Kara</h1>
              <img className={classes.testimonialImg} src="https://images.unsplash.com/photo-1589935308764-6abbc2ac1dc3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"/>
              <br/>
              <h2 className={classes.words}>Super easy and extremely useful tool! Highly recommend!</h2>
            </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.testimonial}>
              <h1 className={classes.name}>Luke</h1>
              <img className={classes.testimonialImg} src="https://images.unsplash.com/photo-1525818918160-9ceba31508da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"/>
              <br/>
              <h2 className={classes.words}>Whether my family believes me or not, I now have a green thumb thanks to Homegrown.</h2>
        </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.testimonial}>
              <h1 className={classes.name}>Monica</h1>
              <img className={classes.testimonialImg} src="https://images.unsplash.com/photo-1496088001371-37be891dbd95?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80"/>
              <br/>
              <h2 className={classes.words}>My plants are already looking healthier and stronger!</h2>
        </Paper>
        </Grid>
        
    
      </Grid>
    </div>
    </Paper>
    );
  }}
  
  export default withStyles(styles)(Testimonials);