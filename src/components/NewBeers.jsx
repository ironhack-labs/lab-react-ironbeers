import React, { Component } from 'react';
import Header from './Header';
import axios from 'axios';
import { Link } from 'react-router-dom';

export class NewBeers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: 0,
      contributed_by: '',
    };
  }

  handleSubmit = (evento) => {
    evento.preventDefault();
    // const body = this.state;

    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', this.state)
      .then((res) =>
        console.log(res.data)(
          (this.setState = {
            name: '',
            tagline: '',
            description: '',
            first_brewed: '',
            brewers_tips: '',
            attenuation_level: 0,
            contributed_by: '',
          })
        )
      );
  };

  // handleChange = (evento) => {
  //   console.log('ESTE ES EL EVENTO', evento);
  //   this.setState({
  //     [evento.target.name]: evento.target.value,
  //   });
  // };

  handleChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <Header />
        <h1>NEW BEER</h1>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                onChange={this.handleChange}
              />

              <label>Tagline</label>
              <input
                type="text"
                className="form-control"
                placeholder="Tagline"
                name="tagline"
                onChange={this.handleChange}
              />

              <label>Description</label>
              <input
                type="text"
                className="form-control"
                placeholder="description"
                name="description"
                onChange={this.handleChange}
              />

              <label>first brewed</label>
              <input
                type="text"
                className="form-control"
                placeholder="first_brewed"
                name="first_brewed"
                onChange={this.handleChange}
              />

              <label>Brewers tips</label>
              <input
                type="text"
                className="form-control"
                placeholder="Brewers tips"
                name="brewers_tips"
                onChange={this.handleChange}
              />

              <label>attenuation level</label>
              <input
                type="number"
                className="form-control"
                placeholder="attenuation level"
                name="attenuation_level"
                onChange={this.handleChange}
              />

              <label>contributed by</label>
              <input
                type="text"
                className="form-control"
                placeholder="attenuation level"
                name="contributed_by"
                onChange={this.handleChange}
              />

              <br />
              <Link to="/beers">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default NewBeers;
