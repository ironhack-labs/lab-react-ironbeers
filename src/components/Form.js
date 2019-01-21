import React, { Component } from "react";
import { postData } from "../lib/postData.js";

/* Import Components */
import { Input } from "../components/Input";
import { TextArea } from "../components/TextArea";
import { Button } from "../components/Button";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newBeer: {
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: "",
        contributed_by: ""
      }
    };
  }

  /* This lifecycle hook gets executed when the component mounts */

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({ newBeer: { ...prevState.newBeer, [name]: value } }),
      () => console.log(this.state.newBeer)
    );
  }

  handleTextArea(e) {
    console.log("Inside handleTextArea");
    let value = e.target.value;
    this.setState(
      prevState => ({
        newBeer: {
          ...prevState.newBeer,
          description: value
        }
      }),
      () => console.log(this.state.newBeer)
    );
  }

  handleFormSubmit(e) {
    e.preventDefault();
    postData(this.state.newBeer)
      .then(response => {
        console.log(response);
        this.setState({ response });
      })
      .catch(err => {
        this.setState({ err });
      });
    this.handleClearForm(e);
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newBeer: {
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: "",
        contributed_by: ""
      }
    });
  }

  render() {
    return (
      <form className="container" onSubmit={e => this.handleFormSubmit(e)}>
        <Input
          inputtype={"text"}
          title={"Name"}
          name={"name"}
          value={this.state.newBeer.name}
          placeholder={"Enter the beer name"}
          handleChange={e => this.handleInput(e)}
        />
        <Input
          inputtype={"text"}
          title={"Tagline"}
          name={"tagline"}
          value={this.state.newBeer.tagline}
          placeholder={"Enter a tagline"}
          handleChange={e => this.handleInput(e)}
        />
        <TextArea
          title={"Description"}
          rows={5}
          value={this.state.newBeer.description}
          name={"description"}
          handleChange={e => this.handleTextArea(e)}
          placeholder={"Describe the new beer"}
        />
        <Input
          inputtype={"text"}
          title={"First Brewed"}
          name={"first_brewed"}
          value={this.state.newBeer.first_brewed}
          placeholder={"When was first brewed"}
          handleChange={e => this.handleInput(e)}
        />
        <Input
          inputtype={"text"}
          title={"Brewers Tips"}
          name={"brewers_tips"}
          value={this.state.newBeer.brewers_tips}
          placeholder={"Give some tips"}
          handleChange={e => this.handleInput(e)}
        />
        <Input
          inputtype={"number"}
          title={"Attenuation Level"}
          name={"attenuation_level"}
          value={this.state.newBeer.attenuation_level}
          placeholder={"Number of attenuation"}
          handleChange={e => this.handleInput(e)}
        />
        <Input
          inputtype={"text"}
          title={"Contributed by"}
          name={"contributed_by"}
          value={this.state.newBeer.contributed_by}
          placeholder={"Your name"}
          handleChange={e => this.handleInput(e)}
        />
        <div id='buttons' className="container">
          <span>
            <Button
              action={e => this.handleFormSubmit(e)}
              type={"warning"}
              title={"Add"}
            />
          </span>
          <span>
            <Button
              action={e => this.handleClearForm(e)}
              type={"secondary"}
              title={"Clear Form"}
            />
          </span>
        </div>
      </form>
    );
  }
}
