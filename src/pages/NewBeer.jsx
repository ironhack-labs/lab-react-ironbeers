import React from 'react';
import '../styles/NewBeer.css';
import beerApi from '../beerApi';

class NewBeer extends React.Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewer_tips: '',
    attenuation_level: 0,
    contributed_by: '',
  };

  handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;
    this.setState({
      [key]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    beerApi.addBeer({
      name: this.state.name,
      tagline: this.state.tagline,
      description: this.state.description,
      first_brewed: this.state.first_brewed,
      brewer_tips: this.state.brewer_tips,
      attenuation_level: this.state.attenuation_level,
      contributed_by: this.state.contributed_by,
    });
    
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Add a new beer</h1>
        <form onSubmit={this.handleSubmit} className="form">
          <div>
            <label>Beer name: </label>
            <input onChange={this.handleChange} type="text" name="name" />
          </div>
          <div>
            <label>Tagline: </label>
            <input onChange={this.handleChange} type="text" name="tagline" />
          </div>
          <div>
            <label>Description: </label>
            <input
              onChange={this.handleChange}
              type="text"
              name="description"
            />
          </div>
          <div>
            <label>First brew date: </label>
            <input
              onChange={this.handleChange}
              type="date"
              name="first_brewed"
            />
          </div>
          <div>
            <label>Brewer tips: </label>
            <input
              onChange={this.handleChange}
              type="text"
              name="brewer_tips"
            />
          </div>
          <div>
            <label>Attenuation level: </label>
            <input
              onChange={this.handleChange}
              type="number"
              name="attenuation_level"
            />
          </div>
          <div>
            <label>Your name: </label>
            <input
              onChange={this.handleChange}
              type="text"
              name="contributed_by"
            />
          </div>
          <button>add this beer!</button>
        </form>
      </div>
    );
  }
}

export default NewBeer;
