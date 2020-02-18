import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class AddBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      tagline: "",
      details: "",
      creator: ""
    };
  }

  handleChange = event => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const newBeer = {
      name: this.state.name,
      tagline: this.state.tagline,
      details: this.state.details,
      creator: this.state.creator
    };
    this.props.addBeer(newBeer);
    this.setState({
      name: "",
      tagline: "",
      details: "",
      creator: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={e => this.handleChange(e)}
        />

        <label>Tagline:</label>
        <input
          type="text"
          name="tagline"
          value={this.state.tagline}
          onChange={e => this.handleChange(e)}
        />

        <label>Details:</label>
        <textarea
          type="text"
          rows="3"
          name="details"
          checked={this.state.details}
          onChange={e => this.handleChange(e)}
        />

        <label>Creator:</label>
        <input
          type="text"
          name="creator"
          value={this.state.creator}
          onChange={e => this.handleChange(e)}
        />

        <input className="inputButton" type="submit" value="Submit" />
      </form>
    );
  }
}

export default AddBeer;
