import React from 'react';
import './CreateBeerPage.css';
import Header from '../../components/header/Header';
import Axios from 'axios';

class CreateBeerPage extends React.Component {
  state = {
    name: '',
    tagLine: '',
    description: '',
    firstBrewed: '',
    brewersTips: '',
    attenuationLevel: '',
    contributedBy: '',
  };

  handleTextChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    Axios.post(
      'https://ih-beers-api2.herokuapp.com/beers/new',
      this.state
    ).then((res) => console.log(res));
  };

  render() {
    return (
      <>
        <Header />
        <h1>Create new beer</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name"></label>
            <br />
            <input
              type="text"
              name="name"
              value={this.state.name}
              placeholder="Name"
              onChange={this.handleTextChange}
            />
          </div>
          <div>
            <label htmlFor="tagline"></label>
            <br />
            <input
              type="text"
              name="tagline"
              value={this.state.tagline}
              placeholder="Tagline"
              onChange={this.handleTextChange}
            />
          </div>
          <div>
            <label htmlFor="description"></label>
            <br />
            <input
              type="text"
              name="description"
              value={this.state.describtion}
              placeholder="Description"
              onChange={this.handleTextChange}
            />
          </div>
          <div>
            <label htmlFor="firstBrewed"></label>
            <br />
            <input
              type="text"
              name="firstBrewed"
              value={this.state.firstBrewed}
              placeholder="First Brewed"
              onChange={this.handleTextChange}
            />
          </div>
          <div>
            <label htmlFor="brewersTips"></label>
            <br />
            <input
              type="text"
              name="brewersTips"
              value={this.state.brewersTips}
              placeholder="Brewers Tips"
              onChange={this.handleTextChange}
            />
          </div>
          <div>
            <label htmlFor="attenuationLevel"></label>
            <br />
            <input
              type="number"
              name="attenuationLevel"
              value={this.state.attenuationLevel}
              placeholder="Attenuation Level"
              onChange={this.handleTextChange}
            />
          </div>
          <div>
            <label htmlFor="contributedBy"></label>
            <br />
            <input
              type="text"
              name="contributedBy"
              value={this.state.contributedBy}
              placeholder="Contributed By"
              onChange={this.handleTextChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

export default CreateBeerPage;
