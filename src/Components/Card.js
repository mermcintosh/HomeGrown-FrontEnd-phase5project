import React from 'react'




class Card extends React.Component{
    render(){
    return (
      <div className="card">
        <h2>{this.props.plant.name}</h2>
        <img src = {this.props.plant.image}/>
        <h3>{this.props.plant.category}</h3>
        <h3>{this.props.plant.description}</h3>
        <h3>{this.props.plant.light}</h3>
        <h3>{this.props.plant.watering}</h3>
        <h3>{this.props.plant.soil}</h3>
        <button onClick={() => (this.props.addToCollection(this.props.plant))}>Add me to your collection!</button>
      </div>
    )
  }}
  
  export default Card;