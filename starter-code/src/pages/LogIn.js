import React, { Component } from 'react'
import Nav from "../components/Nav";
import axios from 'axios';
import qs from "qs";

export default class Login extends Component {

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {
    username: "",
    password: ""
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "POST",
      data: qs.stringify(this.state),
      url: "https://ih-beers-api.herokuapp.com/auth/login",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data))
        this.props.history.push("/")
      })
  }

  render() {
    return (
      <>
        <div className="login-nav">
          <Nav />
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} value={this.state.username} placeholder="username" type="text" name="username" />
            <input onChange={this.handleChange} value={this.state.password} placeholder="password" type="password" name="password" />
            <button type="submit">Submit </button>
          </form>
        </div>
      </>
    )
  }
}