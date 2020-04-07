import React, { Component } from "react";
import { signup } from "../utils/auth";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSignupClick = this.handleSignupClick.bind(this);
  }

  state = {
    user: {
      username: "",
      firstname: "",
      lastname: "",
      email: "",
      password: ""
    },
    error: null
  };

  handleInputChange(e) {
    let userCopy = { ...this.state.user };
    userCopy[e.target.name] = e.target.value;
    this.setState({
      user: userCopy
    });
  }

  handleSignupClick() {
    signup(this.state.user)
      .then(reponse => {
        this.setState({ error: null }, () => {
          this.props.history.push("/");
        });
      })
      .catch(error => {
        this.setState({ error: error.response && error.response.data });
      });
  }

  render() {
    return (
      <div>
        <h2>Please sign up</h2>
        <div className="form-group">
          <label>Username</label>
          <input
            className="form-control"
            onChange={this.handleInputChange}
            value={this.state.user.username}
            name="username"
            type="text"
          />
        </div>
        <div className="form-group">
          <label>Firstname</label>
          <input
            onChange={this.handleInputChange}
            value={this.state.user.firstname}
            className="form-control"
            name="firstname"
            type="text"
          />
        </div>
        <div className="form-group">
          <label className="label">Lastname</label>
          <input
            onChange={this.handleInputChange}
            value={this.state.user.lastname}
            className="form-control"
            name="lastname"
            type="text"
          />
        </div>
        <div className="form-group">
          <label className="label">Email</label>
          <input
            onChange={this.handleInputChange}
            value={this.state.user.email}
            className="form-control"
            name="email"
            type="text"
          />
        </div>
        <div className="form-group">
          <label className="label">Password</label>
          <input
            onChange={this.handleInputChange}
            value={this.state.user.password}
            className="form-control"
            name="password"
            type="password"
          />
        </div>

        <button className="btn-primary btn" onClick={this.handleSignupClick}>
          Signup
        </button>

        {this.state.error && (
          <p className="has-text-danger">
            {this.state.error.message || "error"}
          </p>
        )}
      </div>
    );
  }
}

export default Signup;
