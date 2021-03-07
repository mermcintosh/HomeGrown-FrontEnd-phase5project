import React from 'react';
import Copyright from './Copyright';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
      flexGrow: 1,
      margin: 80,
      padding: 50,
      backgroundColor: "#e3e2e1",
      fontSize: 50,
      color: '#688f69',
      borderRadius: "4px",
      textAlign: "center",
      fontFamily: "Barlow Condensed"
    },

    paper:{
      textDecoration: "underline"
    },
    // email:{
    //    fontWeight: "bold" 
    // },
    
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
  });

  class Contact extends React.Component {
    render(){
    const {classes} = this.props
        return (
            <div>
            <div className={classes.root}>
              <Grid item xs={12} className={classes.paper}>
                <h1>Contact Us</h1>
              </Grid>
              <Grid itemxs={6}>
                  <h4 className={classes.contactStart}>For any questions, concerns, or constructive ways for us to improve - send us an email to:</h4>
                  <h3 className={classes.email}>contact@homegrown.com</h3>
                  <h5>or</h5>
                  <h3>(123) 456-7890</h3>
                </Grid>

              
          </div>
          <Copyright/>
          </div>
              
        )
      }
}

export default withStyles(styles)(Contact);