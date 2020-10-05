import axios from 'axios';
import React, { Component } from 'react';
import Header from '../header/Header';
import './NewBeer.css';

export default class NewBeer extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    firstBrewed: '',
    brewersTips: '',
    attenuation: 0,
    contributed_by: '',
  };

  submitNew = async (body) => {
    try {
      let res = await axios({
        method: 'post',
        url: 'https://ih-beers-api2.herokuapp.com/beers/new',
        data: body,
      });

      let data = res.data;
      return data;
    } catch (error) {
      console.log(error.response);

      return error.response;
    }
  };

  handleSubmit = (event) => {
    event.preventDefault(); // --> .preventDefault() is called on the event when submitting the form to prevent a browser reload/refresh

    const {
      name,
      tagline,
      description,
      firstBrewed,
      brewersTips,
      attenuation,
      contributed_by,
    } = this.state;

    const data = {
      name,
      tagline,
      description,
      firstBrewed,
      brewersTips,
      attenuation,
      contributed_by,
    };

    //resets form to empty values
    this.setState({
      name: '',
      tagline: '',
      description: '',
      firstBrewed: '',
      brewersTips: '',
      attenuation: 0,
      contributed_by: '',
    });

    //posts data to api
    this.submitNew(data);
    // alert(`${JSON.stringify(data.name, null, 2)} was created.`);
  };

  handleInputChange = (event) => {
    const { value } = event.target;
    const inputName = event.target.name;
    this.setState(
      {
        [inputName]: value,
      },
      () => console.log(this.state)
    );
  };

  render() {
    return (
      <div>
        <Header />
        <form onSubmit={this.handleSubmit}>
          <div className="inputItem">
            <label>Name</label>
            <input
              type="text"
              value={this.state.name}
              name="name"
              onChange={this.handleInputChange}
            />
          </div>
          <div className="inputItem">
            <label>Tagline</label>
            <input
              type="text"
              value={this.state.tagline}
              name="tagline"
              onChange={this.handleInputChange}
            />
          </div>
          <div className="inputItem">
            <label>Description</label>
            <textarea
              type="textarea"
              rows="10"
              cols="50"
              value={this.state.description}
              name="description"
              onChange={this.handleInputChange}
            />
          </div>
          <div className="inputItem">
            <label>First Brewed</label>
            <input
              type="text"
              value={this.state.firstBrewed}
              name="firstBrewed"
              onChange={this.handleInputChange}
            />
          </div>
          <div className="inputItem">
            <label>Brewers Tips</label>
            <input
              type="text"
              value={this.state.brewersTips}
              name="brewersTips"
              onChange={this.handleInputChange}
            />
          </div>
          <div className="inputItem">
            <label>Attenuation Level</label>
            <input
              type="number"
              value={this.state.attenuation}
              name="attenuation"
              onChange={this.handleInputChange}
            />
          </div>
          <div className="inputItem">
            <label>Contributed By</label>
            <input
              type="text"
              value={this.state.contributed_by}
              name="contributed_by"
              onChange={this.handleInputChange}
            />
          </div>
          <button>ADD NEW</button>
        </form>
      </div>
    );
  }
}
