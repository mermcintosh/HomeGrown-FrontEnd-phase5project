import React from 'react';
import Card from '../Components/Card.js'
import Search from '../Components/Search.js'

class DirectoryPage extends React.Component{
    render(){
    return (
     
      <div className="container">
        <Search changeSearch={this.props.changeSearch} />
       <h1>This is directory page</h1>
       {this.props.plants.map(plant => <Card plant={plant} key={plant.id} addToCollection={this.props.addToCollection} updateCurrentUser={this.props.updateCurrentUser}/>)}
      </div>
      
    )
  }}
  
  export default DirectoryPage;