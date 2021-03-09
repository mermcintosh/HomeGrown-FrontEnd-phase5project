import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Parallax } from 'react-parallax';
import Typography from '@material-ui/core/Typography';



const styles = theme => ({
    root: {
      // minHeight: "200px",
      flexGrow: 1,
      marginLeft: 40,
      marginBottom: 40,
      padding: 150,
      // backgroundImage: "url(https://images.unsplash.com/photo-1497990571654-77aa8ec36038?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2068&q=80)",
      fontSize: 60,
      color: "white",
      borderRadius: "4px",
      textAlign: "center",
      fontFamily: "Barlow Condensed",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center bottom',
      // position: "apsolute"
    },
  });

  const image2 = "https://images.unsplash.com/photo-1497990571654-77aa8ec36038?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2068&q=80"

class KillPlant extends React.Component {
    render(){
    const {classes} = this.props
        return (
          //   <div className={classes.root}>
          //     <Grid item xs={12} className={classes.paper}>
          //       <h1>"AH AH AH AH Stayin' Alive, Stayin' Alive"</h1>
          //       <h2>- Your Future Plants</h2>
          //     </Grid>
          // </div>

          <div className="App">
      <Parallax bgImage={image2} className={classes.root} strength={500}>
        <div className={classes.root}>
           <Grid item xs={12} className={classes.paper}>
              <h1>"AH AH AH AH Stayin' Alive, Stayin' Alive"</h1>
              <h2>- Your Future Plants</h2>
          </Grid>
        </div>
      </Parallax>
    </div>
        )
      }
}




export default withStyles(styles)(KillPlant);