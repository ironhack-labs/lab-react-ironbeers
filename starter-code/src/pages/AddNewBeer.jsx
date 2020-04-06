import React, { Component } from 'react';
import axios from 'axios';
import qs from 'qs';

class AddNewBeer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tagline: '',
      description: '',
      first_brewed: '',
      attenuation_level: '',
      brewers_tips: '',
      contributed_by: '',
      name: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: 'POST',
      url: 'https://ih-beers-api.herokuapp.com/beers/new',
      data: qs.stringify(this.state),
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    }).then((res) => {
      debugger;
      console.log(res.data);
    });
  }

  render() {
    return (
      <div className="AddNewBeer">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.tagline}
            onChange={this.handleChange}
            name="tagline"
            placeholder="tagline"
          />
          <input
            type="text"
            value={this.state.description}
            onChange={this.handleChange}
            name="description"
            placeholder="description"
          />
          <input
            type="text"
            value={this.state.first_brewed}
            onChange={this.handleChange}
            name="first_brewed"
            placeholder="first_brewed"
          />
          <input
            type="text"
            value={this.state.attenuation_level}
            onChange={this.handleChange}
            name="attenuation_level"
            placeholder="attenuation_level"
          />
          <input
            type="text"
            value={this.state.brewers_tips}
            onChange={this.handleChange}
            name="brewers_tips"
            placeholder="brewers_tips"
          />
          <input
            type="text"
            value={this.state.contributed_by}
            onChange={this.handleChange}
            name="contributed_by"
            placeholder="contributed_by"
          />
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
            placeholder="name"
          />
          <button type="submit">Add new beer!</button>
        </form>
      </div>
    );
  }
}

export default AddNewBeer;
