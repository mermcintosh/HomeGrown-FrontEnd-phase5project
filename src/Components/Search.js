import React from 'react';

class Search extends React.Component{
    render(){
    return (
      <div>
       <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search for a plant"}
        onChange={(e) => {this.props.changeSearch(e.target.value)}}
      />
      <i className="circular search link icon"></i>
    </div>
    <br />
      <label>
        <strong>Plant Type:</strong>
        <select onChange={(e) => this.props.updateFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Flowering">Flowering</option>
          <option value="Foliage">Foliage</option>
          <option value="Cactus/Succulent">Cactus/Succulent</option>
        </select>
      </label>
      </div>
    )
  }}
  
  export default Search;