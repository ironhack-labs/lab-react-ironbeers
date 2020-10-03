import Axios from 'axios';
import React from 'react';
import { Redirect } from 'react-router-dom';

class NewBeer extends React.Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: '',
  };

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ ...this.state, [`${name}`]: value });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    Axios.post('https://ih-beers-api2.herokuapp.com/beers/new',this.state)
    .then(response =>{
        console.log(`${response.status}`);
        this.setState({...this.state, redirect: "/beers" });
    })

  }

  render() {
    if (this.state.redirect) {
        return <Redirect to={this.state.redirect} />
    }
    return (
      <div className="container">
        <form onSubmit={this.handleFormSubmit.bind(this)} className="row row-cols-1">
          <div className="mt-2">
            <label className="d-block">Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange.bind(this)}
            />
          </div>

          <div className="mt-2">
            <label className="d-block">Tagline</label>
            <input
              type="text"
              name="tagline"
              value={this.state.tagline}
              onChange={this.handleChange.bind(this)}
            />
          </div>

          <div className="mt-2">
            <label className="d-block">Description</label>
            <input
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.handleChange.bind(this)}
            />
          </div>

          <div className="mt-2">
            <label className="d-block">First Brewed</label>
            <input
              type="text"
              name="first_brewed"
              value={this.state.first_brewed}
              onChange={this.handleChange.bind(this)}
            />
          </div>

          <div className="mt-2">
            <label className="d-block">Brewers Tips</label>
            <input
              type="text"
              name="brewers_tips"
              value={this.state.brewers_tips}
              onChange={this.handleChange.bind(this)}
            />
          </div>

          <div className="mt-2">
            <label className="d-block">Attenuation Level</label>
            <input
              type="number"
              name="attenuation_level"
              value={this.state.attenuation_level}
              onChange={this.handleChange.bind(this)}
            />
          </div>

          <div className="mt-2">
            <label className="d-block">Contributed By</label>
            <input
              type="text"
              name="contributed_by"
              value={this.state.contributed_by}
              onChange={this.handleChange.bind(this)}
            />
          </div>

          <div className="d-block">
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewBeer;
