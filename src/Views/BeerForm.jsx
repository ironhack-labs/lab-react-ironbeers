import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Components/Header';

class BeerForm extends Component {
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
    const name = event.target.name
    this.setState({ [name]: event.target.value })
  };

  handleSubmit = (event) => {
    event.preventDefault()

    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', {
        name: this.state.name,
        tagline: this.state.tagline,
        description: this.state.description,
        first_brewed: this.state.first_brewed,
        brewers_tips: this.state.brewers_tips,
        attenuation_level: this.state.attenuation_level,
        contributed_by: this.state.contributed_by,
      })
      .then((response) => {
        this.props.history.push('/beers/all')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <section>
        <Header />

        <form onSubmit={this.handleSubmit}>
        <div className ="divForm">
        <label>Name</label>
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>

        <div className ="divForm">
        <label>Tagline</label>
          <input
            name="tagline"
            type="text"
            value={this.state.tagline}
            onChange={this.handleChange}
          />
        </div>

        <div className ="divForm">
        <label>Description</label>
          <input
            name="description"
            type="text"
            value={this.state.description}
            onChange={this.handleChange}
          />
        </div>

        <div className ="divForm">
        <label>First brewed</label>
          <input
            name="first_brewed"
            type="text"
            value={this.state.first_brewed}
            onChange={this.handleChange}
          />
        </div>

        <div className ="divForm">
        <label>Tips from the brewer</label>
          <input
            name="brewers_tips"
            type="text"
            value={this.state.brewers_tips}
            onChange={this.handleChange}
          />
        </div>

        <div className ="divForm">
        <label>Attenuation level</label>
          <input
            name="attenuation_level"
            type="number"
            value={this.state.attenuation_level}
            onChange={this.handleChange}
          />
        </div>

        <div className ="divForm">
        <label>Contributor</label>
          <input
            name="contributed_by"
            type="text"
            value={this.state.contributed_by}
            onChange={this.handleChange}/>
        </div>

          <button>Add</button>

        </form>
      </section>
    )
  }
}

export default BeerForm;
