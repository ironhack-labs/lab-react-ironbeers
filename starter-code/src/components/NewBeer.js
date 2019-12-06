import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

const NewBir = styled.form`
  input {
    border: 1px solid gray;
    border-radius: 12px;
    width: 30%;
  }
  button {
    width: 30%;
  }
  display: flex;
  flex-direction: column;
  margin-top: 5vh;
  align-content: center;
`;
//ih-beers-api2.herokuapp.com/beers/new

export default class Home extends Component {
  state = {
    form: {
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      brewers_tips: "",
      attenuation_level: 0,
      contributed_by: ""
    }
  };
  submitForm = async e => {
    e.preventDefault();
    const { form } = this.state;
    const { data } = await axios.post(
      "https://ih-beers-api2.herokuapp.com/beers/new",
      form
    );
    console.log(data);
  };
  handleInputs = ({ target: { value, name } }) => {
    this.setState({
      ...this.state,
      form: {
        ...this.state.form,
        [name]: value
      }
    });
  };
  render() {
    return (
      <NewBir onSubmit={this.submitForm}>
        <h1>Add New Beer</h1>
        <input
          name="name"
          type="text"
          value={this.state.form.name}
          onChange={this.handleInputs}
        />
        <input
          name="tagline"
          type="text"
          value={this.state.form.tagline}
          onChange={this.handleInputs}
        />
        <input
          name="description"
          type="text"
          value={this.state.form.description}
          onChange={this.handleInputs}
        />
        <input
          name="first_brewed"
          type="text"
          value={this.state.form.first_brewed}
          onChange={this.handleInputs}
        />
        <input
          name="brewers_tips"
          type="text"
          value={this.state.form.brewers_tips}
          onChange={this.handleInputs}
        />
        <input
          name="attenuation_level"
          type="number"
          value={this.state.form.attenuation_level}
          onChange={this.handleInputs}
        />
        <input
          name="contributed_by"
          type="text"
          value={this.state.form.contributed_by}
          onChange={this.handleInputs}
        />
        <button>Submit</button>
      </NewBir>
    );
  }
}
