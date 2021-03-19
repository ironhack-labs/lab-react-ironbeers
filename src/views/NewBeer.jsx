import React, { Component } from 'react';
import axios from 'axios';

class Newbeer extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: '',
  };

  handleChange = (event) => {
    const key = event.target.name;
    this.setState({ [key]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('hello');

    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', {
        name: this.state.name,
        tagline: this.state.tagline,
        description:  this.state.description,
        first_brewed: this.state.first_brewed,
        brewers_tips: this.state.brewers_tips,
        attenuation_level: this.state.attenuation_level,
        contributed_by: this.state.contributed_by,
      })
      .then((response) => {
        // this.setState({
        //   name: "",
        //   brand: "",
        //   price: 0,
        //   image: "",
        // });
        this.props.history.push('/beers');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <form method="" onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            onChange={this.handleChange}
            value={this.state.name}
            name="name"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="">tagline</label>
          <input
            name="tagline"
            value={this.state.tagline}
            onChange={this.handleChange}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="">description</label>
          <input
            onChange={this.handleChange}
            value={this.state.description}
            name="description"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="">first brewed</label>
          <input
            name="first_brewed"
            value={this.state.first_brewed}
            onChange={this.handleChange}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="">brewers tips</label>
          <input
            name="brewers_tips"
            value={this.state.brewers_tips}
            onChange={this.handleChange}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="">attenuation level</label>
          <input
            name="attenuation_level"
            value={this.state.attenuation_level}
            onChange={this.handleChange}
            type="number"
          />
        </div>
        <div>
          <label htmlFor="">contributed by</label>
          <input
            name="contributed_by"
            value={this.state.contributed_by}
            onChange={this.handleChange}
            type="text"
          />
        </div>
        <button>add one</button>
      </form>
    );
  }
}

export default Newbeer;
