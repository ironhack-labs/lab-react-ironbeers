import React from 'react';
import NavBar from './NavBar';
import axios from 'axios';
class NewBeer extends React.Component {
  state = {};

  handleSubmit(event) {
    event.preventDefault();
    const newBeer = this.state;
    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handleInput(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <h1>New Beers</h1>
        <form className="Form" onSubmit={(event) => this.handleSubmit(event)}>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            onChange={(event) => this.handleInput(event)}
          />

          <label htmlFor="tagline">Tagline: </label>
          <input
            type="text"
            name="tagline"
            onChange={(event) => this.handleInput(event)}
          />

          <label htmlFor="description">Description: </label>
          <input
            type="text"
            name="description"
            onChange={(event) => this.handleInput(event)}
          />

          <label htmlFor="first_brewed">First brewed: </label>
          <input
            type="text"
            name="first_brewed"
            onChange={(event) => this.handleInput(event)}
          />

          <label htmlFor="brewers_tips">Brewers tips: </label>
          <input
            type="text"
            name="brewers_tips"
            onChange={(event) => this.handleInput(event)}
          />

          <label htmlFor="attenuation_level">Attenuation level: </label>
          <input
            type="number"
            name="attenuation_level"
            onChange={(event) => this.handleInput(event)}
          />

          <label htmlFor="contributed_by">Contributed by: </label>
          <input
            type="text"
            name="contributed_by"
            onChange={(event) => this.handleInput(event)}
          />

          <button>Add new beer</button>
        </form>
      </div>
    );
  }
}
export default NewBeer;
