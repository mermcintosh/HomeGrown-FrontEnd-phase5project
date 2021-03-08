import React from 'react'
import { Route, Link, Redirect, BrowserRouter as Router } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { CardMedia } from '@material-ui/core';


const styles = theme => ({

    thankyou: {
        fontSize: 100,
        textAlign: "center",
        marginLeft: 75,
        
    },

    background: {
        backgroundImage: `url(https://images.unsplash.com/photo-1483794344563-d27a8d18014e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80)`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
        positive: "relative",
        padding: 200
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
      },

    loading: {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        width: "auto",
        height: "auto",
        marginTop: 175,
    }

    })

class Thankyou extends React.Component{
    state = {
        redirect: false
    }

    componentDidMount() {
        this.id = setTimeout(() => this.setState({ redirect: true }), 1200)
      }

    componentWillUnmount() {
        clearTimeout(this.id)
      }

    render(){

    const {classes} = this.props

    return (
        this.state.redirect
        ? <Redirect to="/" />
        : 
        <div className={classes.background}>
        <Typography className={classes.thankyou} component="h1" variant="h3" color="inherit" style={{ fontFamily: 'Vidaloka' }}>
        Thank you for visiting HomeGrown
       </Typography>
       <img className={classes.loading} src="https://i.gifer.com/origin/b4/b4d657e7ef262b88eb5f7ac021edda87_w200.webp"/>
       
       </div>
       
    )
  }}
  
  export default withStyles(styles)(Thankyou)