import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NewBeer extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
  };

  handleChange = (event) => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.addTheBeer(this.state);
    console.log(this.state);
    this.setState({
      name: '',
      tagline: '',
      description: '',
    });
  };

  render() {
    return (
      <div>
        <h1>Add your favorite beer</h1>
        <form onSubmit={this.handleFormSubmit}>
          <label htmlFor="">Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={(e) => this.handleChange(e)}
          />

          <label htmlFor="">Tagline:</label>
          <input
            type="text"
            name="tagline"
            value={this.state.tagline}
            onChange={(e) => this.handleChange(e)}
          />

          <label htmlFor="">Description:</label>
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={(e) => this.handleChange(e)}
          />

          <input type="submit" value="Submit" />
        </form>
        <Link to={'/'}>Back to the home page</Link>
      </div>
    );
  }
}

export default NewBeer;
