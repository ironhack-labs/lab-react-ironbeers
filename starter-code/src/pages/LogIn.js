import React, { Component } from 'react';
import axios from 'axios';
import qs from 'qs';
import Header from '../components/Header';
import { Link } from 'react-router-dom';


class LogIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: 'POST',
      url: 'hthttps://ih-beers-api.herokuapp.com/auth/login',
      withCredentials: true,
      data: qs.stringify(this.state),
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    })
      // .then((response) => {
      //   this.props.history.push(`/login/${response.data._id}`);
      // })
      .catch((err) => {});
  }

  render() {
    return (
      <div>
        <Header />
        <h1>Please log in</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="username"
            value={this.state.username}
            onChange={this.handleChange}
            name="username"
          />
          <input
            type="text"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
            name="password"
          />
          <Link to="../">
            <button type="submit">Log in</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default LogIn;
