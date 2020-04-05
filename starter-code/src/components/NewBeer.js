import React, { Component } from "react";
import axios from "axios";

export default class NewBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      brewers_tips: "",
      attenuation_level: "",
      contributed_by: "",
    };
  }

  formSubmitHandler = (event) => {
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
          attenuation_level: "",
          contributed_by: "",
        });
      })
      .catch((error) => console.log(error));
  };

  changeHandler = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return <div>
    <form onSubmit={this.formSubmitHandler}>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={this.state.name}
        onChange={e => this.changeHandler(e)}
      />
      <label>Tagline:</label>
      <input
        type="text"
        name="tagline"
        value={this.state.tagline}
        onChange={e => this.changeHandler(e)}
      />
      <label>description:</label>
      <input
        type="text"
        name="description"
        value={this.state.description}
        onChange={e => this.changeHandler(e)}
      />
      <label>first_brewed:</label>
      <input
        type="text"
        name="first_brewed"
        value={this.state.first_brewed}
        onChange={e => this.changeHandler(e)}
      />
      <label>brewers_tips:</label>
      <input
        type="text"
        name="brewers_tips"
        value={this.state.brewers_tips}
        onChange={e => this.changeHandler(e)}
      />
      <label>attenuation_level:</label>
      <input
        type="number"
        name="attenuation_level"
        value={this.state.attenuation_level}
        onChange={e => this.changeHandler(e)}
      />
      <label>contributed_by:</label>
      <input
        type="text"
        name="contributed_by"
        value={this.state.contributed_by}
        onChange={e => this.changeHandler(e)}
      />
      

      <input type="submit" value="Submit" />
    </form>
  </div>
  ;
  }
}
