import React, { Component } from 'react';
import BeersService from '../services/beers.service';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips:'',
        attenuation_level: '',
        contributed_by: '',
      },
    };
    this.beersService = new BeersService();
  }
  componentDidMount() {}

  handleSubmit(event) {
    event.preventDefault();
    this.beersService.createBeer(this.state.fields);
    this.setState({
      fields: {
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: '',
        contributed_by: '',
      },
    });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      fields: {
        ...this.state.fields,
        [name]: value,
      },
    });
  }

  render() {
    const { fields } = this.state.fields;
    return (
      <form
        id="beer-form"
        className="beer-form"
        onSubmit={(e) => this.handleSubmit(e)}
      >
        <div className="form-item">
          <label htmlFor="name">Name: </label>
          <input
            className="beer-form"
            placeholder="Beer name.."
            type="text"
            name="name"
            value={fields.name}
            onChange={(e) => this.handleChange(e)}
          />
        </div>
        <div className="form-item">
          <label htmlFor="tagline">Tagline: </label>
          <input
            className="beer-form"
            placeholder="Beer tagline.."
            type="text"
            name="tagline"
            value={fields.tagline}
            onChange={(e) => this.handleChange(e)}
          />
        </div>
        <div className="form-item">
          <label htmlFor="description">Description: </label>
          <input
            className="beer-form"
            type="text"
            name="description"
            value={fields.description}
            onChange={(e) => this.handleChange(e)}
          />
        </div>
        <div className="form-item">
          <label htmlFor="first_brewed">First Brewed: </label>
          <input
            className="beer-form"
            type="text"
            name="first_brewed"
            value={fields.first_brewed}
            onChange={(e) => this.handleChange(e)}
          />
        </div>
        <div className="form-item">
          <label htmlFor="attenuation_level">Attenuation Level: </label>
          <input
            className="beer-form"
            type="number"
            name="attenuation_level"
            value={fields.attenuation_level}
            onChange={(e) => this.handleChange(e)}
          />
        </div>
        <div className="form-item">
          <label htmlFor="contibuted_by">Contributed by: </label>
          <input
            className="beer-form"
            type="text"
            name="contibuted_by"
            value={fields.contibuted_by}
            onChange={(e) => this.handleChange(e)}
          />
        </div>
        <div className="form-item">
          <label htmlFor="brewers_tips">Brewers tips: </label>
          <input
            className="beer-form"
            type="text"
            name="brewers_tips"
            value={fields.brewers_tips}
            onChange={(e) => this.handleChange(e)}
          />
        </div>
        <button className="button" type="submit">
          Create Beer
        </button>
      </form>
    );
  }
}
