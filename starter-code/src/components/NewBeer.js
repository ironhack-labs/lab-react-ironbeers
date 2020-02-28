  
import React, { Component } from "react";
import Header from "./Header.js";
import FormField from "./FormField.js";
import Button from "./Button.js";
import axios from "axios";

class NewBeer extends Component {

    state = {
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      brewers_tips: "",
      attenuation_level: 0,
      contributed_by: ""
    };
  

  handleChange = (e,field) => {
    this.setState({
       ...this.state,
           [field]: e.target.value
    });
  };

  handleSubmit= event => {
    event.preventDefault();
    axios
      .post(`https://ih-beers-api2.herokuapp.com/beers/new`, this.state)
      .then(e => console.log(e));
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
                inputchange={e => this.handleChange(e,"name")}
                name="name"
                label="Name"
                type="text"
                placeholder="Beer"
              />
              <FormField
                inputchange={e => this.handleChange(e,"tagline")}
                name="tagline"
                label="Tagline"
                type="text"
                placeholder="What beer"
              />
              <div className="column">
                {" "}
                <label>Description</label>
                <textarea
                  onChange={e => this.handleChange(e,"description")}
                  rows="4"
                  cols="20"
                  name="description"
                  placeholder="Something"
                />
              </div>
              <FormField
                inputchange={e => this.handleChange(e,"firstbrewed")}
                name="firstbrewed"
                label="First Brewed"
                type="date"
                placeholder="info"
              />
              <FormField
                inputchange={e => this.handleChange(e,"brewers_tips")}
                name="brewers_tips"
                label="Brewers tips"
                type="text"
                placeholder="info"
              />
              <FormField
                inputchange={e => this.handleChange(e,"attenuation_level")}
                name="attenuation_level"
                label="Attenuation level"
                type="number"
                placeholder="info"
              />
              <FormField
                inputchange = {
                    e => this.handleChange(e, "contributed_by")
                }
                name="contributed_by"
                label="Contributed by"
                type="text"
                placeholder="your name here"
              />
              <Button
                submit={e => this.handleSubmit(e)}
                className=""
                info="Create"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewBeer;