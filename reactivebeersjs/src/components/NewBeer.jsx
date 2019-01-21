import React, { Component } from "react";
import Header from "./Header.jsx";
import FormField from "./FormField.jsx";
import Button from "./Button.jsx";
import axios from "axios";
class NewBeer extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      brewers_tips: "",
      attenuation_level:0,
      contributed_by: ""
    };
  }
  handleNameInput = event => {
    this.setState({
      name: event.target.value
    });
  };
  handleTaglineInput = event => {
    this.setState({
      tagline: event.target.value
    });
  };
  handleDescriptionInput = event => {
    this.setState({
      description: event.target.value
    });
  };
  handleFirst_brewedInput = event => {
    this.setState({
      first_brewed: event.target.value
    });
  };
  handleBrewers_tipsInput = event => {
    this.setState({
      brewers_tips: event.target.value
    });
  };
  handleAttenuation_level = event => {
    this.setState({
      attenuation_level: event.target.value
    });
  };
  handleContributed_by = event => {
    this.setState({
      contributed_by: event.target.value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
     axios.post(`https://ironbeer-api.herokuapp.com/beers/new`,this.state )
    .then(e=> console.log(e))
    
  };

  render() {
    return (
      <div>
        <div>
          <Header />
        </div>

       <div className="card">
        <div className="formWidth">
        <div>
          <FormField
          inputchange={e => this.handleNameInput(e)}
            name="name"
            label="Name"
            type="text"
            placeholder="Coronita"
          />
          <FormField
          inputchange={e => this.handleTaglineInput(e)}
            name="tagline"
            label="Tagline"
            type="text"
            placeholder="Not the best beer"
          />
          <div className="column">
            {" "}
            <label>Description</label>
            <textarea
            onChange={e => this.handleDescriptionInput(e)}
              rows="4"
              cols="20"
              name="description"
              placeholder="Something about the beer"
            />
          </div>
          <FormField
          inputchange={e => this.handleFirst_brewedInput(e)}
            name="firstbrewed"
            label="First Brewed"
            type="date"
            placeholder="type some info"
          />
          <FormField
          inputchange={e => this.handleBrewers_tipsInput(e)}
            name="brewers_tips"
            label="Breweds tips"
            type="text"
            placeholder="type some info"
          />
          <FormField
          inputchange={e => this.handleAttenuation_level(e)}
            name="attenuation_level"
            label="Attenuation level"
            type="number"
            placeholder="type some info"
          />
          <FormField
           inputchange={e => this.handleContributed_by(e)}
            name="contributed_by"
            label="Contributed by"
            type="text"
            placeholder="your name here"
          />
          <Button submit={e=>this.handleFormSubmit(e)} className="" info="Create" />
        </div>
        </div>
        </div>
      </div>
    );
  }
}

export default NewBeer;
