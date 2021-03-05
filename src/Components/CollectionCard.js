import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import EditForm from './EditForm'






class CollectionCard extends React.Component{

  state={
    showForm: false
  }

  handleShowForm = () => {
    this.setState({showForm: !this.state.showForm})
    // console.log(this.state.showForm)
  }
    render(){
    return (
      <div className="card">
        <h3>{this.props.collection.plant.name}</h3>
        {/* {console.log(this.props.collection)} */}
        {/* wont show up on screen (the nickname above) */}
        {/* <h3>{this.props.collection.plant.category}</h3>
        <h3>{this.props.collection.plant.description}</h3>
        <h3>{this.props.collection.nickname}</h3> */}
        {/* <img src = {this.props.collection.plant_id.image}/>
        <h3>{this.props.collection.category}</h3>
        <h3>{this.props.collection.light}</h3>
        <h3>{this.props.collection.watering}</h3>
        <h3>{this.props.collection.soil}</h3> */}
        <button onClick={() => this.props.deleteCollection(this.props.collection)}>Remove from collection!</button>
        {/* <button onClick={() => this.props.deleteCollection(this.props.collection)}>Remove from collection!</button> */}

        <button onClick={this.handleShowForm}> Give my plant a nickname! </button>
        { this.state.showForm
            ?
          <EditForm collection={this.props.collection} currentUserData={this.props.currentUserData} assignNickname={this.props.assignNickname}/>
            :
          null
        }

      </div>
    )
  }}

  
  export default CollectionCard;

//   <div className="bg-dark">
//   <Navbar changeSearch={this.changeSearch} showForm={this.showForm} />
//   {this.state.showForm ? <Form addNewPoke={this.addNewPokemon} /> : null}
//   <TeamContainer removeFromTeam={this.removeFromTeam} team={this.state.team}/>
//   <div className="container">
//     <PokeContainer addToTeam={this.addToTeam} pokemon={filteredPokemon}/>
//   </div>
// </div>