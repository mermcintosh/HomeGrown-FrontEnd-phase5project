import React from 'react';
import NavBar from '../Components/NavBar'
import HeroLanding from '../Components/HeroLanding';
// import Features from '../Components/Features';
import Features from '../Components/Features';
import KillPlant from '../Components/KillPlant';
import Gallery from '../Components/Gallery';
import Testimonials from '../Components/Testimonials';
import Team from '../Components/Team';
import Contact from '../Components/Contact'; 
import { CallMissedSharp } from '@material-ui/icons';
// import FadeIn from 'react-fade-in'
// import { withStyles } from '@material-ui/core/styles';


// const styles = theme => ({

//   parallax: {
//     /* Set a specific height */
//   minHeight: 500, 

//   /* Create the parallax scrolling effect */
//   backgroundAttachment: "fixed",
//   backgroundPosition: "center",
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "cover",
//   }
// })


class LandingPage extends React.Component{

  componentDidMount(){
    this.props.hideShell(false)
  }
    render(){
      // const {classes} = this.props
    return (
     
      <div >
       <HeroLanding/>
       <Features/>
       <KillPlant/>
       <Testimonials/>
       <Gallery/>
       <Contact/>
      </div>
     
    )
  }
}
// className={classes.parallax}
  // export default withStyles(styles)(LandingPage);
  export default LandingPage


 