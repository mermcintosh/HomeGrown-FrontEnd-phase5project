import React from 'react';
import Card from '../Components/Card.js'


class DirectoryPage extends React.Component{
    render(){
    return (
      <div>
       <h1>This is directory page</h1>
       {this.props.plants.map(plant => <Card plant={plant}/>)}
      </div>
    )
  }}
  
  export default DirectoryPage;