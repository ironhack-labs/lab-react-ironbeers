import BeersService from "../services/beers.service"
import React, { Component } from 'react';
export default class newBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        name: '',
        tagline: '',
        description: '',
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: ""
          
      }
      
      };
      this.beersService = new BeersService();
  }
  handleSubmit(event) {
    event.preventDefault();
      this.beersService.create(this.state.fields)
          .then(() => {
              this.setState({
                  fields: {
                      name: '',
                      tagline: '',
                      description: '',
                      first_brewed: '',
                      brewers_tips: '',
                      attenuation_level: 0,
                      contributed_by: '',
                  }
              })
      
    
      
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
    
  showForm() {
    const { fields } = this.state;
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <div className="form-item">
          <label htmlFor="title">Name: </label>
          <input
            placeholder="Name.."
            type="text"
            name="name"
            value={fields.name}
            onChange={(e) => this.handleChange(e)}
          />
        </div>
        <div className="form-item">
          <label htmlFor="tagline">Tagline: </label>
          <input
            type="text"
            name="tagline"
            value={fields.tagline}
            onChange={(e) => this.handleChange(e)}
          />
        </div>
        <div className="form-item">
          <label htmlFor="description">Description: </label>
          <input
            type="text"
            name="description"
            value={fields.description}
            onChange={(e) => this.handleChange(e)}
          />
        </div>
        <div className="form-item">
          <label htmlFor="first_brewed">First brewed: </label>
          <input
            type="text"
            name="first_brewed"
            value={fields.first_brewed}
            onChange={(e) => this.handleChange(e)}
          />
        </div>
        <div className="form-item">
          <label htmlFor="attenuation_level">Attenuation level: </label>
          <input
            type="number"
            name="attenuation_level"
            value={fields.attenuation_level}
            onChange={(e) => this.handleChange(e)}
          />
        </div>

        <div className="form-item">
          <label htmlFor="contributed_by">Contributed by: </label>
          <input
            type="text"
            name="contributed_by"
            value={fields.contributed_by}
            onChange={(e) => this.handleChange(e)}
          />
        </div>
        <div className="form-item">
          <label htmlFor="brewers_tips">Brewers tips: </label>
          <input
            type="text"
            name="brewers_tips"
            value={fields.brewers_tips}
            onChange={(e) => this.handleChange(e)}
          />
        </div>
        <button type="submit">Create Beer</button>
      </form>
    );
  }
  render() {
      return <div>{this.showForm()}</div>;
  }
}
