import React from 'react';

let CollectionsURL = "http://localhost:3000/collections/"

class EditForm extends React.Component{

    handleSubmit = (e) => {
        e.preventDefault()
        let newNickname = document.querySelector('#nickname').value
        this.props.assignNickname(newNickname, this.props.collection.id)   
    }

    render(){
    return (
        <form onSubmit={(e) => this.handleSubmit(e)}>
        <p>Add your plant nickname</p>
        <div>
            <div>
                <input id="nickname" name="nickname" type="text" placeholder="Enter a Nickname"/>
            </div>
        </div>
        <input type="submit"/>
    </form>
    )
  }}
  
  export default EditForm;