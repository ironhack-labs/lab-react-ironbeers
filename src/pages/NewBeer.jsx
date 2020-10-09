import React from 'react';
import Header from '../components/Header';
import beerAPI from '../api/beersAPI';

class NewBeer extends React.Component {
  state = {
    name: null,
    tagline: null,
    description: null,
    first_brewed: null,
    brewer_tips: null,
    attenuation_level: null,
    contributed_by: null,
  };

  handleChange = (evt) => {
    const value = evt.target.value;
    const name = evt.target.name;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    beerAPI
      .createNew(this.state)
      .then((apiResponse) => {
        console.log(apiResponse);
        this.props.history.push('/beers');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="container">
        <Header />
        
        <form onSubmit={this.handleSubmit} className="Form">
        <h1 className="title">New Beer</h1>
          <label className="label">Beer name: </label>
          <input
            onChange={this.handleChange}
            id="name"
            type="text"
            name="name"
            className="input"
            value={this.state.name}
          />

          <label className="label">Tagline: </label>

          <input
            onChange={this.handleChange}
            id="tagline"
            type="text"
            name="tagline"
            className="input"
            value={this.state.tagline}
          />

          <label className="label">Description: </label>
          <input
            onChange={this.handleChange}
            id="description"
            type="text"
            name="description"
            className="input"
            value={this.state.description}
          />

          <label className="label">First brew date: </label>
          <input
            onChange={this.handleChange}
            id="first_brewed"
            type="text"
            name="first_brewed"
            className="input"
            value={this.state.first_brewed}
          />

          <label className="label">Brewer tips: </label>
          <input
            onChange={this.handleChange}
            id="brewer_tips"
            type="text"
            name="brewer_tips"
            className="input"
            value={this.state.brewer_tips}
          />

          <label className="label">Attenuation level: </label>
          <input
            onChange={this.handleChange}
            id="attenuation_level"
            type="number"
            name="attenuation_level"
            className="input"
            value={this.state.attenuation_level}
          />

          <label className="label">Your name: </label>
          <input
            onChange={this.handleChange}
            id="contributed_by"
            type="text"
            name="contributed_by"
            className="input"
            value={this.state.contributed_by}
          />

          <button className="button">Create new beer</button>
        </form>
      </div>
    );
  }
}

export default NewBeer;
