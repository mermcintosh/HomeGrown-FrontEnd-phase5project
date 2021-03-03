import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'






class CollectionCard extends React.Component{
    render(){
    return (
      <div className="card">
        <h3>{this.props.collection.plant.name}</h3>
        {/* {console.log(this.props.collection)} */}
        {/* wont show up on screen (the nickname above) */}
        <h3>{this.props.collection.plant.category}</h3>
        <h3>{this.props.collection.plant.description}</h3>
        {/* <img src = {this.props.collection.plant_id.image}/>
        <h3>{this.props.collection.category}</h3>
       
        <h3>{this.props.collection.light}</h3>
        <h3>{this.props.collection.watering}</h3>
        <h3>{this.props.collection.soil}</h3> */}
        <button onClick={() => this.props.deleteCollection(this.props.collection)}>Remove from collection!</button>
      </div>
    )
  }}

  
  export default CollectionCard;