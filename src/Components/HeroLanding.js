import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
// import { Parallax } from 'react-parallax';

const styles = theme => ({

  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://images.unsplash.com/photo-1493957988430-a5f2e15f39a3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3900&q=80)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: 200,
    margin: 40,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
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
      fontSize: 250,
      textAlign: "center",
      padding: theme.spacing(3),
      [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },

  },

subtitle: {
    fontSize: 100,
    padding: theme.spacing(3),
      [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingLeft: 0,
    },
    textAlign: "center"
}
    
     
  
});

class HeroLanding extends React.Component{
    render(){
  const {classes} = this.props
//   const { post } = props;

  return (
    <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(https://images.unsplash.com/photo-1493957988430-a5f2e15f39a3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3900&q=80)` }}>
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={`url(https://images.unsplash.com/photo-1497990571654-77aa8ec36038?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fHBsYW50c3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60)`} alt={"plant image"} />}
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography className={classes.title} component="h1" variant="h3" color="inherit" style={{ fontFamily: 'Vidaloka' }}>
             Homegrown
            </Typography>
            <br/>
            <Typography className={classes.subTitle} variant="h3" color="inherit" style={{ fontFamily: 'Quicksand' }}>
              Homegrown was established in 2021 in hopes that the more time we are spending at home, the more time we will love and care on our green family. 
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}}

// MainFeaturedPost.propTypes = {
//   post: PropTypes.object,
export default withStyles(styles)(HeroLanding)