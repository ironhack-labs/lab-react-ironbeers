import React from "react";
import Header from "./Header";
import axios from "axios";

class NewBeer extends React.Component {
  state = {
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    } = this.state;
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", {
        name,
        tagline,
        description,
        first_brewed,
        brewers_tips,
        attenuation_level,
        contributed_by,
      })
      .then(() => {
        this.setState({
          name: "",
          tagline: "",
          description: "",
          first_brewed: "",
          brewers_tips: "",
          attenuation_level: 0,
          contributed_by: "",
        });
      })
      .catch((error) => console.log(error));
  };

  handleChange = (event) => {
    // console.log(event.target);
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <Header />
        <form className='form' onSubmit={this.handleFormSubmit}>
          <label>Name</label>
          <input
            type='text'
            name='name'
            value={this.state.name}
            onChange={(e) => this.handleChange(e)}
            required
          />

          <label>Tagline</label>
          <input
            type='text'
            name='tagline'
            value={this.state.tagline}
            onChange={(e) => this.handleChange(e)}
            required
          />

          <label>Description</label>
          <input
            type='text'
            name='description'
            value={this.state.description}
            onChange={(e) => this.handleChange(e)}
            required
          />

          <label>First brewed</label>
          <input
            type='text'
            name='first_brewed'
            value={this.state.first_brewed}
            onChange={(e) => this.handleChange(e)}
            required
          />

          <label>Brewers tips</label>
          <input
            type='text'
            name='brewers_tips'
            value={this.state.brewers_tips}
            onChange={(e) => this.handleChange(e)}
            required
          />

          <label>Attenuation level</label>
          <input
            type='number'
            placeholder='0'
            name='attenuation_level'
            value={this.state.attenuation_level}
            onChange={(e) => this.handleChange(e)}
            required
          />

          <label>Contributed by</label>
          <input
            type='text'
            name='contributed_by'
            value={this.state.contributed_by}
            onChange={(e) => this.handleChange(e)}
            required
          />

          <input className='form__button' type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}

export default NewBeer;
