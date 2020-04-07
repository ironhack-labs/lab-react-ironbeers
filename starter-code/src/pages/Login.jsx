import React, { Component } from 'react'
import { login } from "../utils/auth";

class Login extends Component {
  constructor() {
    super();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
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
  }

  handleInputChange(e) {
    let userCopy = { ...this.state.user };
    userCopy[e.target.name] = e.target.value;
    this.setState({
      user: userCopy
    })
  }

  handleLoginClick() {
    login(this.state.user)
      .then(() => {
        this.setState({
          error: null
        }, () => {
          this.props.history.push("/")
        })
      })
      .catch((error) => {
        this.setState({ error: error.response && error.response.data })
      })
  }

  render() {
    return (
      <div>
        <h2>Please log in</h2>
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
          <label className="label">Password</label>
          <input
            onChange={this.handleInputChange}
            value={this.state.user.password}
            className="form-control"
            name="password"
            type="password"
          />
        </div>

        <button className="btn-primary btn" onClick={this.handleLoginClick}>
          Login
          </button>
      </div>
    )
  }
}

export default Login
