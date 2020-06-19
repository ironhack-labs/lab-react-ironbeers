import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class NewBeer extends React.Component {
  handleNewBeer = (e) => {
      e.preventDefault();
      let body = {
        name : e.target.name.value,
        tagline : e.target.tagline.value,
        description : e.target.description.value,
        first_brewed : e.target.first_brewed.value,
        brewers_tips : e.target.brewers_tips.value,
        attenuation_level : e.target.attenuation_level.value,
        contributed_by : e.target.contributed_by.value,
      }
      axios.post("https://ih-beers-api2.herokuapp.com/beers/new", body)
      .then((response) => {
          console.log(response);
      })
  };

  render() {
    return (
      <form onSubmit={this.handleNewBeer}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="name"
            name='name'
            placeholder="name"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="tagline"
            name='tagline'
            placeholder="tagline"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="description"
            name='description'
            placeholder="description"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="first_brewed"
            name='first_brewed'
            placeholder="first brewed"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="brewers_tips"
            name='brewers_tips'
            placeholder="brewers tips"
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            id="attenuation_level"
            name='attenuation_level'
            placeholder="attenuation level"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="contributed_by"
            name='contributed_by'
            placeholder="contributed_by"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}
