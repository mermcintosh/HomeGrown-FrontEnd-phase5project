import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'






class Card extends React.Component{
    render(){
    return (
      <div className="card">
        <h2>{this.props.plant.name}</h2>
        <img className="img-card"src = {this.props.plant.image}/>
        <h4>{this.props.plant.category}</h4>
        <h4>{this.props.plant.description}</h4>
        <h4>{this.props.plant.light}</h4>
        <h4>{this.props.plant.watering}</h4>
        <h4>{this.props.plant.soil}</h4>
        <button onClick={() => (this.props.addToCollection(this.props.plant))}><Link to="/user">Add me to your collection!</Link></button>
      </div>
    )
  }}

  
  export default Card;