import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { Parallax } from 'react-parallax';

const styles = theme => ({

  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://images.unsplash.com/photo-1493957988430-a5f2e15f39a3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3900&q=80)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '60% 40%',
    paddingTop: 275,
    paddingBottom: 150,
    paddingLeft:50,
    marginLeft: 42,
    marginRight: 40,
    marginBottom:20,
    height: "88vh"
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.2)',
    height: "100vh"
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },

  title: {
      fontSize: 300,
      textAlign: "center",
      color: "white",
      padding: theme.spacing(3),
      [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 40,
      paddingTop: 250
    },

  },

subtitle: {
    fontSize: 45,
    fontFamily: "Barlow Condensed",
    color: "white",
    paddingLeft: 60,
    letterSpacing: "3px",
    lineHeight: "1.5"
},
      
});

const image1= "https://images.unsplash.com/photo-1493957988430-a5f2e15f39a3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3900&q=80"



const homegrownImage = {
  position: 'relative',
  backgroundImage: 'url(https://images.unsplash.com/photo-1493957988430-a5f2e15f39a3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3900&q=80)',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '60% 40%',
  borderRadius: "4px",
  marginLeft: 42,
  marginRight: 40,
  marginBottom:20,
  height: "88vh",
  backgroundColor: "#adaba5",
}

const App = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  backgroundColor: 'rgba(0,0,0,.1)',
}

class HeroLanding extends React.Component{
    render(){
  const {classes} = this.props

  return (
 
    <div className="App">
      <Parallax style={homegrownImage} bgImage={image1} strength={500}>
      <div className={classes.overlay}>
       <Grid container>
         <Grid item md={6}>
           <div className={classes.mainFeaturedPostContent}>
             <Typography className={classes.title} component="h1" variant="h3" style={{ fontFamily: 'Vidaloka' }}>
              HomeGrown
             </Typography>
             <br/>
             <Typography className={classes.subtitle} variant="h3">
               HomeGrown was established in 2021 in hopes that the more time you are spending at home, the more time you will love and care for your favorite plants. We are here to ensure quality care for all plants that enter your home. 
             </Typography>
           </div>
         </Grid>
       </Grid>
    </div>
      </Parallax>
    </div>
  );
}}

export default withStyles(styles)(HeroLanding)