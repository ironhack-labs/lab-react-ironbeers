import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NewBeer extends Component {
    state = {
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: 0,
        contributed_by: ''
    }

    handleInputChange = (event) => {
        const value = event.target.value;
        const placeholder = event.target.name;
        this.setState({
          [placeholder]: value,
        });
      };
    
      handleFormSubmission = (event) => {
        event.preventDefault();
        // const { name, calories, image } = this.state;
        // const meal = { name, calories, image };
        const beer = {
            name: this.state.name,
            tagline: this.state.tagline,
            description: this.state.description,
            first_brewed: this.state.first_brewed,
            brewers_tips: this.state.brewers_tips,
            attenuation_level: this.state.attenuation_level,
            contributed_by: this.state.contributed_by
        };
        this.props.onAddNewBeer(beer);
      };
    
      render() {
        return (
          <form onSubmit={this.handleFormSubmission}>
            <label htmlFor="name-input">Name</label>
            <input
              id="name-input"
              type="text"
              placeholder="Name"
              name="name"
              required
              onChange={this.handleInputChange}
              value={this.state.name}
            />
    
            <label htmlFor="tagline-input">tagline</label>
            <input
              id="tagline-input"
              type="text"
              placeholder="Tagline"
              name="tagline"
              required
              onChange={this.handleInputChange}
              value={this.state.tagline}
            />
    
            <label htmlFor="description-input">Description</label>
            <input
              id="description-input"
              type="text"
              placeholder="Description"
              name="description"
              required
              onChange={this.handleInputChange}
              value={this.state.description}
            />

            <label htmlFor="first_brewed-input">First Brewed</label>
            <input
              id="first_brewed-input"
              type="text"
              placeholder="First Brewed"
              name="first_brewed"
              required
              onChange={this.handleInputChange}
              value={this.state.first_brewed}
            />

            <label htmlFor="brewers_tips-input">Brewers Tips</label>
            <input
              id="brewers_tips-input"
              type="text"
              placeholder="Brewers Tips"
              name="brewers_tips"
              required
              onChange={this.handleInputChange}
              value={this.state.brewers_tips}
            />

            <label htmlFor="attenuation_level-input">Attenuation Level</label>
            <input
              id="attenuation_level-input"
              type="number"
              placeholder="Attenuation Level"
              name="attenuation_level"
              required
              onChange={this.handleInputChange}
              value={this.state.attenuation_level}
            />

            <label htmlFor="contributed_by-input">Contributed By</label>
            <input
              id="contributed_by-input"
              type="text"
              placeholder="Contributed By"
              name="contributed_by"
              required
              onChange={this.handleInputChange}
              value={this.state.contributed_by}
            />
    
            <button>Add Beer</button>
          </form>
        );
      }
    }

export default NewBeer;