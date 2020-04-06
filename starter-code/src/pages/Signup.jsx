import React, { Component } from 'react';
import Nav from '../components/Nav.jsx';
import axios from 'axios';
import qs from 'qs';


class Signup extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 username: "",
                 firstname: "",
                 lastname: "",
                 email: "",
                 password: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        axios({
            method: 'POST',
            url: 'https://ih-beers-api.herokuapp.com/auth/signup',
            data: qs.stringify(this.state),
            headers: {
                "content-type": "application/x-www-form-urlencoded"
            }
        })
        .then((response) => {
            this.props.history.push(`/login`)
        })
        .catch((error) => {
            console.log(error.response.data);
        })
    }

    render() {
        return (
          <div>
            <Nav />

            <form onSubmit={this.handleSubmit}>
              <input
                placeholder="Type username"
                type="text"
                value={this.state.username}
                onChange={this.handleChange}
                name="username"
              />
              <input
                placeholder="Type firstname"
                type="text"
                value={this.state.firstname}
                onChange={this.handleChange}
                name="firstname"
              />
              <input
                placeholder="Type lastname"
                type="text"
                value={this.state.lastname}
                onChange={this.handleChange}
                name="lastname"
              />
              <input
                placeholder="Type email"
                type="text"
                value={this.state.email}
                onChange={this.handleChange}
                name="email"
              />
              <input
                placeholder="Type password"
                type="text"
                value={this.state.password}
                onChange={this.handleChange}
                name="password"
              />
              <button type="submit">Signup</button>
            </form>
          </div>
        );
    }
}

export default Signup;
