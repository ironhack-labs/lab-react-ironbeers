import NavMain from './NavMain';
import axios from 'axios';

import React, { Component } from 'react';

export class NewBeer extends Component {
  state = {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: null,
      contributed_by: '',
  };

  handleChange = (event) => {
    const key = event.target.name;
    let value = event.target.value;
    this.setState({[key]: value });
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((apiRes) => {
        console.log(apiRes);
        this.setState({ beers: apiRes.data });
      })
      .catch((apiError) => console.log(apiError));
  }

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', {
        name: this.state.name,
        tagline: this.state.tagline,
        description: this.state.description,
        first_brewed: this.state.first_brewed,
        brewers_tips: this.state.brewers_tips,
        attenuation_level: this.state.attenuation_level,
        contributed_by: this.state.contributed_by,
      }
   )
      .then((response) => {
          console.log(response);
      })
      .catch((error) => {console.log(error)});
  };

  render() {
    return (
      <div className="main-div">
        <NavMain />
        <form onSubmit={this.handleSubmit}>
          <h2 className="title">Add a new beer</h2>
          <div className="inputDiv">
            <label htmlFor="name">Name :</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={this.handleChange}
            />
          </div>
          <div className = "inputDiv">
            <label htmlFor="tagline">Tagline :</label>
            <input
              type="text"
              id="tagline"
              name="tagline"
              onChange={this.handleChange}
            />
          </div>
          <div className = "inputDiv">
            <label htmlFor="description">Description :</label>
            <input
              type="text"
              id="description"
              name="description"
              onChange={this.handleChange}
            />
          </div>
          <div className = "inputDiv">
            <label htmlFor="first_brewed">First brewed :</label>
            <input
              type="text"
              id="first_brewed"
              name="first_brewed"
              onChange={this.handleChange}
            />
             <div className = "inputDiv">
            <label htmlFor="brewers_tips">Brewers tips :</label>
            <input
              type="text"
              id="brewers_tips"
              name="brewers_tips"
              onChange={this.handleChange}
            />
            </div>
            <div className = "inputDiv">
            <label htmlFor="attenuation_level">Attenuation level :</label>
            <input
              type="number"
              id="attenuation_level"
              name="attenuation_level"
              onChange={this.handleChange}
            />
            </div>
             <div className = "inputDiv">
            <label htmlFor="contributed_by">Contributed by :</label>
            <input
              type="text"
              id="contributed_by"
              name="contributed_by"
              onChange={this.handleChange}
            />
            </div>
          </div>
          <button>SUBMIT</button>
        </form>
      </div>
    );
  }
}

export default NewBeer;
