import React from 'react'; 
// import { Button, Form, Segment, Message } from "semantic-ui-react"



class LoginPage extends React.Component{

    state = {
      username: "",
      password: ""
    }

    handleChange = (e, {name, value}) => {
      this.setState({[name]: value})
    }

    handleLoginSubmit = () => {
      fetch("http://localhosl:3000/login", {
        method: "POST",
        headers: {
          "Content-Type" : "application/json",
          "Accept" : "application.json"
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        })
      }).then(res => res.json())
      .then(userData => {
       this.props.updateCurrentUser(userData)
      })
    }

    // handleLoginSubmit = () => {
    //   console.log("attempting to log in")
    //   fetch("http://localhost:3000/login", {
    //     method:"POST",
    //     headers: {
    //       "Content-Type" : "application/json",
    //       "Accept" : "application.json"
    //     },
    //     body: JSON.stringify({
    //       username: this.state.username,
    //       password: this.state.password
    //     })
    //   }).then(res => res.json())
    //   .then(userData => {
    //     console.log("response from the server", data)
    //     if(data.error_message){
    //       alert(data.error_message)
    //     }else{
    //       //successful log in
    //       localStorage.setItem("token", data.token)
    //       this.props.updateCurrentUser(data.user_data)
    //     }
    //   })
    // };

    render(){
    return (
      <div>
       <form
    onSubmit={this.handleLoginSubmit}
    size="mini"
    key="mini"
    loading={this.props.authenticatingUser}
    error={this.props.failedLogin}
  >
    <input 
    label="username"
    placeholder="username"
    name="username"
    onChange={this.handleChange}
    value={this.state.username} 
    />

    <input
     error
     header={this.props.failedLogin ? this.props.error : null}
     />

    

    <input 
    type="password"
    label="password"
    placeholder="password"
    name="password"
    onChange={this.handleChange}
    value={this.state.password}
    />

    <button type="submit" value="Submit">Login</button>
</form>
      </div>


      
    )
  }}
  
  export default LoginPage;

 