import React from 'react';
import './NewBeer.css';
import NavBar from '../NavBar/NavBar';
import { createNewBeer } from '../../services/Services';

class NewBeer extends React.Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: undefined,
    contributed_by: '',
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  newBeer = (e) => {
    e.preventDefault();
    createNewBeer(
      this.state.name,
      this.state.tagline,
      this.state.description,
      this.state.first_brewed,
      this.state.brewers_tips,
      this.state.attenuation_level,
      this.state.contributed_by
    ).then((response) => {
      this.setState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: null,
        contributed_by: '',
      });
    });
  };

  render() {
    return (
      <div>
        <NavBar />
        <form className="container" onSubmit={this.newBeer}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <br />
            <input
              className="form-control input"
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            ></input>
          </div>

          <div className="form-group">
            <label tmlFor="tagline">Tagline</label>
            <br />
            <input
              className="form-control input"
              type="text"
              id="tagline"
              name="tagline"
              value={this.tagline}
              onChange={this.handleInputChange}
            ></input>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <br />
            <input
              className="form-control input"
              type="text"
              id="description"
              name="description"
              value={this.description}
              onChange={this.handleInputChange}
            ></input>
          </div>

          <div className="form-group">
            <label htmlFor="first_brewed">First Brewed</label>
            <br />
            <input
              className="form-control input"
              type="text"
              id="first_brewed"
              name="first_brewed"
              value={this.first_brewed}
              onChange={this.handleInputChange}
            ></input>
          </div>

          <div className="form-group">
            <label htmlFor="brewers_tips">Brewers Tips</label>
            <br />
            <input
              className="form-control input"
              type="text"
              id="brewers_tips"
              name="brewers_tips"
              value={this.brewers_tips}
              onChange={this.handleInputChange}
            ></input>
          </div>

          <div className="form-group">
            <label htmlFor="attenuation_level">Attenuation Level</label>
            <br />
            <input
              className="form-control input"
              type="number"
              id="attenuation_level"
              name="attenuation_level"
              value={this.attenuation_level}
              onChange={this.handleInputChange}
            ></input>
          </div>

          <div className="form-group">
            <label for="contributed_by">Created by</label>
            <br />
            <input
              className="form-control input"
              type="text"
              id="contributed_by"
              name="contributed_by"
              value={this.contributed_by}
              onChange={this.handleInputChange}
            ></input>
          </div>

          <br />
          <button type="submit" className="submit-btn">
            Add new beer
          </button>
        </form>
      </div>
    );
  }
}

export default NewBeer;
