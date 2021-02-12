import React from 'react';
import axios from 'axios';
import Navbar from './Navbar';

class NewBeer extends React.Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: '',
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        'https://ih-beers-api2.herokuapp.com/beers/new',
        this.state
      );

      console.log(response);

      this.props.history.push('/');
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <form>
            <div className="form-group">
              <label htmlFor="beerFormName">Name</label>
              <input
                type="text"
                className="form-control"
                id="beerFormName"
                name="name"
                onChange={this.handleChange}
                value={this.state.name}
              />
            </div>
            <div className="form-group">
              <label htmlFor="beerFormTagline">Tagline</label>
              <input
                type="text"
                className="form-control"
                id="beerFormTagline"
                name="tagline"
                onChange={this.handleChange}
                value={this.state.tagline}
              />
            </div>
            <div className="form-group">
              <label htmlFor="beerFormDescription">Description</label>
              <textarea
                type="text"
                className="form-control"
                id="beerFormDescription"
                name="description"
                onChange={this.handleChange}
                value={this.state.description}
              />
            </div>
            <div className="form-group">
              <label htmlFor="beerFormFirstBrewed">First Brewed</label>
              <input
                type="text"
                className="form-control"
                id="beerFormFirstBrewed"
                name="first_brewed"
                onChange={this.handleChange}
                value={this.state.first_brewed}
              />
            </div>
            <div className="form-group">
              <label htmlFor="beerFormBrewersTips">Brewers Tips</label>
              <input
                type="text"
                className="form-control"
                id="beerFormBrewersTips"
                name="brewers_tips"
                onChange={this.handleChange}
                value={this.state.brewers_tips}
              />
            </div>
            <div className="form-group">
              <label htmlFor="beerFormAttenuationLevel">
                Attenuation Level
              </label>
              <input
                type="number"
                className="form-control"
                id="beerFormAttenuationLevel"
                name="attenuation_level"
                onChange={this.handleChange}
                value={this.state.attenuation_level}
              />
            </div>
            <div className="form-group">
              <label htmlFor="beerFormContributedBy">Contributed by</label>
              <input
                type="text"
                className="form-control"
                id="beerFormContributedBy"
                name="contributed_by"
                onChange={this.handleChange}
                value={this.state.contributed_by}
              />
            </div>
            <button
              onClick={this.handleSubmit}
              type="submit"
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default NewBeer;
