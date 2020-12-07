import React from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
class NewBeer extends React.Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    brewers_tips: '',
    first_brewed: '',
    attenuation_level: 0,
    contributed_by: '',
  };

  handleTextChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    const body = {
      name: this.state.name,
      tagline: this.state.tagline,
    };
    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', this.state)
      .then((response) => {
        console.log(response);
        this.props.history.push('/');
      });
  };

  render() {
    return (
      <div>
        <Navbar />
        <form onSubmit={this.handleSubmit}>
          <input
            name="name"
            value={this.state.name}
            type="text"
            onChange={this.handleTextChange}
          />
          <input
            name="tagline"
            value={this.state.tagline}
            type="text"
            onChange={this.handleTextChange}
          />
          <input
            name="description"
            value={this.state.description}
            type="text"
            onChange={this.handleTextChange}
          />
          <input
            name="brewers_tips"
            value={this.state.brewers_tips}
            type="text"
            onChange={this.handleTextChange}
          />
          <input
            name="first_brewed"
            value={this.state.first_brewed}
            type="text"
            onChange={this.handleTextChange}
          />
          <input
            name="contributed_by"
            value={this.state.contributed_by}
            type="text"
            onChange={this.handleTextChange}
          />
          <input
            type="number"
            name="attenuation_level"
            value={this.state.attenuation_level}
            onChange={this.handleTextChange}
          />
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    );
  }
}

export default NewBeer;
