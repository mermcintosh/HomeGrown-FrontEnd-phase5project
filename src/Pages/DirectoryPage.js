import React from 'react';
import Card from '../Components/Card.js'
import Search from '../Components/Search.js'
import MoreButton from '../Components/MoreButton.js'
import BackButton from '../Components/BackButton.js'

class DirectoryPage extends React.Component{

    render(){
    return (
     
      <div className="container">
        <Search changeSearch={this.props.changeSearch} updateFilter={this.props.updateFilter} />
       <h1>This is directory page</h1>
       {this.props.plants.map(plant => <Card plant={plant} key={plant.id} addToCollection={this.props.addToCollection} updateCurrentUser={this.props.updateCurrentUser}/>)}
       {this.props.limit + 4 < this.props.plantLength ? <MoreButton morePlants={this.props.morePlants} plants={this.props.plants}/> : null}
       {this.props.limit == 0 ? null : <BackButton backPlants={this.props.backPlants} plants={this.props.plants}/>} 
      </div>
      
    )
  }}
  
  export default DirectoryPage;