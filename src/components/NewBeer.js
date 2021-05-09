import React from 'react';
import Header from './Header';
import axios from 'axios';

class NewBeer extends React.Component {
  state = {
    
  };

  handleSubmit(event) {
    event.preventDefault();
     axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', this.state)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      }); 
  }

  handleInput(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(this.state)
  }

  render() {
    return (
      <div className="navbar">
        <Header />
        <h2>Create a new beer</h2>
        <div className="form">
          <form onSubmit={(event)=>this.handleSubmit(event)}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={this.state.name}
              onChange={(event)=>this.handleInput(event)}
            />
            <label htmlFor="tagline">Tagline</label>
            <input
              type="text"
              name="tagline"
              id="tagline"
              value={this.state.tagline}
              onChange={(event)=>this.handleInput(event)}
            />
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              id="description"
              value={this.state.description}
              onChange={(event)=>this.handleInput(event)}
            />
            <label htmlFor="first_brewed">First brewed</label>
            <input
              type="text"
              name="first_brewed"
              id="first_brewed"
              value={this.state.first_brewed}
              onChange={(event)=>this.handleInput(event)}
            />
            <label htmlFor="brewers_tips">Brewers Tips</label>
            <input
              type="text"
              name="brewers_tips"
              id="brewers_tips"
              value={this.state.brewers_tips}
              onChange={(event)=>this.handleInput(event)}
            />
            <label htmlFor="attenuation_level">Attenuation level</label>
            <input
              type="number"
              name="attenuation_level"
              id="attenuation_level"
              value={this.state.attenuation_level}
              onChange={(event)=>this.handleInput(event)}
            />
            <label htmlFor="contributed_by">Contributed by</label>
            <input
              type="text"
              name="contributed_by"
              id="contributed_by"
              value={this.state.contributed_by}
              onChange={(event)=>this.handleInput(event)}
            />
            <button type="submit">ADD NEW</button>
          </form>
        </div>
      </div>
    );
  }
}

export default NewBeer;
