import React, { Component } from 'react';

export default class NewBeer extends Component {
  state = {
    name: String(),
    tagline: String(),
    description: String(),
    first_brewed: String(),
    brewers_tips: String(),
    attenuation_level: Number(),
    contributed_by: String()
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const { addBeer } = this.props;
    addBeer && addBeer(this.state);
    this.setState({
      name: String(),
      tagline: String(),
      description: String(),
      first_brewed: String(),
      brewers_tips: String(),
      attenuation_level: Number(),
      contributed_by: String()
    });
  };

  handleInputChange = field => e => this.setState({ [field]: e.target.value });

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <div>
            <label>Name: </label>
            <input type="text" onChange={this.handleInputChange('name')} required />
          </div>
          <div>
            <label>Tagline: </label>
            <input type="text" onChange={this.handleInputChange('tagline')} required />
          </div>
          <div>
            <label>Description: </label>
            <input type="text" onChange={this.handleInputChange('description')} required />
          </div>
          <div>
            <label>First Brewed: </label>
            <input type="text" onChange={this.handleInputChange('first_brewed')} required />
          </div>
          <div>
            <label>Brewers Tips: </label>
            <input type="text" onChange={this.handleInputChange('brewers_tips')} required />
          </div>
          <div>
            <label>Attenuation Level: </label>
            <input type="number" onChange={this.handleInputChange('attenuation_level')} required />
          </div>
          <div>
            <label>Contributed By: </label>
            <input type="text" onChange={this.handleInputChange('contributed_by')} required />
          </div>
          <div>
            <input type="submit" value="Add New" />
          </div>
        </form>
      </div>
    );
  }
}
