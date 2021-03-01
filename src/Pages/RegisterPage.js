import React from 'react'; 
import { Redirect } from "react-router-dom";

class RegisterPage extends React.Component {
  state = {
    username: "",
    password: "",
    created: false,
    errorMessage: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  createUser = (event) => {
    event.preventDefault();
    event.target.reset();
    const { username,password } = this.state;

    let user = {
      username: username,
      password: password,
    };

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ user }),
    })
      .then((r) => r.json())
      .then((response) => {
        if (response.status === "created") {
          this.setState({ created: true, errorMessage: "" });
        }
      })
      .catch((response) =>
        this.setState({
          errorMessage:
            "Uh-oh! It didn't work...Make sure your server is running!",
        })
      );
  };

  render() {
    return (
      <div>
        {this.state.created ? (
          <Redirect to="/login" />
        ) : (
          <div>
            <div className="please-log-in">
              <p>{this.state.errorMessage}</p>
            </div>
            <br />
            <form onSubmit={this.createUser}>
              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={this.handleChange}
              />
              <br />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.handleChange}
              />
              <br />
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>
        )}
        <br />
        <br />
      </div>
    );
  }
}


export default RegisterPage;