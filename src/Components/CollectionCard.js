import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'






class CollectionCard extends React.Component{
    render(){
    return (
      <div className="card">
        {/* <h2>{this.props.plant.name}</h2>
        <img src = {this.props.plant.image}/>
        <h3>{this.props.plant.category}</h3>
        <h3>{this.props.plant.description}</h3>
        <h3>{this.props.plant.light}</h3>
        <h3>{this.props.plant.watering}</h3>
        <h3>{this.props.plant.soil}</h3> */}
        <button onClick={() => (this.props.deleteCollection(this.props.collection))}>Remove from collection!</button>
      </div>
    )
  }}

  
  export default CollectionCard;