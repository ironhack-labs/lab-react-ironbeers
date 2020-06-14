import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import FormField from './FormField';

class NewBeer extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: '',
    redirect: false
  };

  nameChangeHandler = (event) => {
    let inputValue = event.target.value;
    let inputName = event.target.name;

    this.setState({
      [inputName]: inputValue,
    });
  };

  submitHandler = (event) => {
    event.preventDefault();
    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', this.state)
      .then(() => {
        this.setState({
          redirect: true
        })
      });
  };

  render() {
    let inputFormFields = (
      <div className="container">
        <div className="row">
          <div className="col-4 text-center">
            <form>
              <FormField
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.nameChangeHandler}
              >
                Name
              </FormField>
              <FormField
                type="text"
                name="tagline"
                value={this.state.tagline}
                onChange={this.nameChangeHandler}
              >
                Tagline
              </FormField>
              <FormField
                type="text"
                name="description"
                value={this.state.description}
                onChange={this.nameChangeHandler}
              >
                Description
              </FormField>
              <FormField
                type="text"
                name="first_brewed"
                value={this.state.first_brewed}
                onChange={this.nameChangeHandler}
              >
                First brewed
              </FormField>
              <FormField
                type="text"
                name="brewers_tips"
                value={this.state.brewers_tips}
                onChange={this.nameChangeHandler}
              >
                Brewers tips
              </FormField>
              <FormField
                type="number"
                name="attenuation_level"
                value={this.state.attenuation_level}
                onChange={this.nameChangeHandler}
              >
                Attenuation level
              </FormField>
              <FormField
                type="text"
                name="contributed_by"
                value={this.state.contributed_by}
                onChange={this.nameChangeHandler}
              >
                Contributed by
              </FormField>

              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.submitHandler}
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    );

    return (
      <div>
        <Navbar></Navbar>

        {!this.state.redirect 
        ? inputFormFields 
        : <Redirect to="/beers" />
        }
      </div>
    );
  }
}

export default NewBeer;
