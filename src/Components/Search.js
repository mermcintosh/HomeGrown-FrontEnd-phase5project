import React from 'react';

class Search extends React.Component{
    render(){
    return (
      <div>
       <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={(e) => {this.props.changeSearch(e.target.value)}}
      />
      <i className="circular search link icon"></i>
    </div>
      </div>
    )
  }}
  
  export default Search;