import React from 'react';
import Card from '../Components/Card.js'


class DirectoryPage extends React.Component{
    render(){
    return (
     
      <div className="container">
       <h1>This is directory page</h1>
       {this.props.plants.map(plant => <Card plant={plant} addToCollection={this.props.addToCollection} updateCurrentUser={this.props.updateCurrentUser}/>)}
      </div>
      
    )
  }}
  
  export default DirectoryPage;