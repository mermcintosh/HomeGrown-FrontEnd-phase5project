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

class LandingPage extends React.Component{

  componentDidMount(){
    this.props.hideShell(false)
  }
    render(){
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

  export default LandingPage


 