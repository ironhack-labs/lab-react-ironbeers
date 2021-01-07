import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class FormBeer extends React.Component {
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
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // console.log(this.state);
    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', {
        name: this.state.name,
        tagline: this.state.tagline,
        description: this.state.description,
        first_brewed: this.state.first_brewed,
        brewers_tips: this.state.brewers_tips,
        attenuation_level: this.state.attenuation_level,
        contributed_by: this.state.contributed_by,
      })
      .then((apiResponse) => {
        this.props.history.push('/beers');
        // console.log("Created !");
        // console.log(apiResponse);
      });
  };

  render() {
    // console.log(this.props, "in form hero");
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="name">Name : </label>
          <input
            onChange={this.handleChange}
            value={this.state.name}
            id="name"
            name="name"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="tagline">tagline : </label>
          <input
            onChange={this.handleChange}
            value={this.state.occupation}
            id="tagline"
            name="tagline"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="description">description : </label>
          <input
            onChange={this.handleChange}
            value={this.state.description}
            id="description"
            name="description"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="first_brewed">first_brewed : </label>
          <input
            onChange={this.handleChange}
            value={this.state.first_brewed}
            id="first_brewed"
            name="first_brewed"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="brewer_tips">brewer_tips : </label>
          <input
            onChange={this.handleChange}
            value={this.state.brewer_tips}
            id="brewer_tips"
            name="brewer_tips"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="attenuation_level">attenuation_level : </label>
          <input
            onChange={this.handleChange}
            value={this.state.attenuation_level}
            id="attenuation_level"
            name="attenuation_level"
            type="number"
          />
        </div>
        <div>
          <label htmlFor="contributed_by">contributed_by : </label>
          <input
            onChange={this.handleChange}
            value={this.state.contributed_by}
            id="contributed_by"
            name="contributed_by"
            type="text"
          />
        </div>
        <button>Submit !</button>
      </form>
    );
  }
}

export default withRouter(FormBeer);
