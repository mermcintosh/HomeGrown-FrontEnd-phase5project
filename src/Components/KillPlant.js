import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
      flexGrow: 1,
      margin: 80,
      padding: 200,
      backgroundColor: '#79a67a',
      fontSize: 60,
      color: "white",
      borderRadius: "4px",
      textAlign: "center",
      fontFamily: "Barlow Condensed"

    },
  });

class KillPlant extends React.Component {
    render(){
    const {classes} = this.props
        return (
            <div className={classes.root}>
              <Grid item xs={12} className={classes.paper}>
                <h1>"AH AH AH AH Stayin' Alive, Stayin' Alive"</h1>
                <h2>- Your Future Plants</h2>
              </Grid>
          </div>
        )
      }
}

export default withStyles(styles)(KillPlant);