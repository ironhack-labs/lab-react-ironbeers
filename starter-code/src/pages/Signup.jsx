import React, { Component } from 'react';
import Default from '../layouts/Default';
import Form from '../layouts/Form';
import { signup } from '../utils/Auth';
import '../stylesheets/Form.css';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSignupClick = this.handleSignupClick.bind(this);
  }

  state = {
    user: {
      username: '',
      firstname: '',
      lastname: '',
      email: '',
      password: '',
    },
    error: null,
  };

  handleInputChange(e) {
    let userCopy = { ...this.state.user };
    userCopy[e.target.name] = e.target.value;
    this.setState({
      user: userCopy,
    });
  }

  handleSignupClick() {
    signup(this.state.user)
      .then(() => {
        this.setState(
          {
            error: null,
          },
          () => {
            this.props.history.push(`/user/profile`);
          }
        );
      })
      .catch((error) => {
        this.setState({ error: error.res && error.res.data });
      });
  }

  render() {
    return (
      <Default>
        <Form className="form">
          <div className="field">
            <label className="label">Username</label>
            <div className="control">
              <input
                onChange={this.handleInputChange}
                value={this.state.username}
                className="input"
                name="username"
                type="text"
                placeholder="Username"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Firstname</label>
            <div className="control">
              <input
                onChange={this.handleInputChange}
                value={this.state.firstname}
                className="input"
                name="firstname"
                type="text"
                placeholder="First Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Lastname</label>
            <div className="control">
              <input
                onChange={this.handleInputChange}
                value={this.state.lastname}
                className="input"
                name="lastname"
                type="text"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                onChange={this.handleInputChange}
                value={this.state.email}
                className="input"
                name="email"
                type="text"
                placeholder="email@yourmail.com"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                onChange={this.handleInputChange}
                value={this.state.password}
                className="input"
                name="password"
                type="password"
                placeholder="Password"
              />
            </div>
          </div>
          <button
            className="is-primary button"
            onClick={this.handleSignupClick}
          >
            Signup
          </button>
          {this.state.error && (
            <p className="has-text-danger">
              {this.state.error.message || 'error'}
            </p>
          )}
        </Form>
      </Default>
    );
  }
}

export default Signup;
