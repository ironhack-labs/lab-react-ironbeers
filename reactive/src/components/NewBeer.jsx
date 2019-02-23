import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


class NewBeer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      brewers_tips: "",
      attenuation_level: "",
      contributed_by: ""
    };
  }

  handleNameInput = e => {
    this.setState({
      ...this.props.theBeer,
      name: e.target.value
    });
  };

  handleTaglineInput = e => {
    this.setState({
      ...this.props.theBeer,
      tagline: e.target.value
    });
  };

  handleDescriptionInput = e => {
    this.setState({
      ...this.props.theBeer,
      description: e.target.value
    });
  };

  handleFirstBrewedInput = e => {
    this.setState({
      ...this.props.theBeer,
      first_brewed: e.target.value
    });
  };

  handleBrewerInput = e => {
    this.setState({
      ...this.props.theBeer,
      brewers_tips: e.target.value
    });
  };

  handleAttenuationInput = e => {
    this.setState({
      ...this.props.theBeer,
      attenuation_level: e.target.value
    });
  };

  handleContributedInput = e => {
    this.setState({
      ...this.props.theBeer,
      contributed_by: e.target.value
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();

    console.log(this.state)
    axios.post("https://ironbeer-api.herokuapp.com/beers/new", this.state)
    .then(response => {
      console.log(response)
      // this.setState({ beers: response.data });
    })
    .catch(err => {
      console.log(err);
    });
  };

  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              className="form-control"
              name="Name"
              value={this.state.name}
              onChange={e => this.handleNameInput(e)}
            />

            <label>Tagline:</label>
            <input
              type="text"
              className="form-control"
              name="tagline"
              value={this.state.tagline}
              onChange={e => this.handleTaglineInput(e)}
            />

            <label>Description:</label>
            <input
              type="text"
              className="form-control"
              name="description"
              value={this.state.description}
              onChange={e => this.handleDescriptionInput(e)}
            />

            <label>First brewed:</label>
            <input
              type="text"
              className="form-control"
              name="firstBrewed"
              value={this.state.first_brewed}
              onChange={e => this.handleFirstBrewedInput(e)}
            />

            <label>Brewers tips</label>
            <input
              type="text"
              className="form-control"
              name="brewersTips"
              value={this.state.brewers_tips}
              onChange={e => this.handleBrewerInput(e)}
            />

            <label>Attenuation Level:</label>
            <input
              type="number"
              className="form-control"
              name="attenuationLEvel"
              value={this.state.attenuation_level}
              onChange={e => this.handleAttenuationInput(e)}
            />

            <label>Contributed By:</label>
            <input
              type="text"
              className="form-control"
              name="contributedBy"
              value={this.state.contributed_by}
              onChange={e => this.handleContributedInput(e)}
            />
          </div>

          <input type="submit" value="Add new" />
        </form>
      </div>
    );
  }
}

export default NewBeer;

// import { Link } from "react-router-dom";
// <Link to='/'>Back</Link>
