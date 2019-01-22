import React, { Component } from "react";
import { postBeer } from "../lib/postBeer.js";
import { Input } from "../components/Input";

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
  };

   handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({ newBeer: { ...prevState.newBeer, [name]: value } }),
      () => console.log(this.state.newBeer)
    );
  }

   handleFormSubmit(e) {
    e.preventDefault();
    postBeer(this.state.newBeer)
      .then(response => {
        console.log(response);
        this.setState({ response });
      })
      .catch(err => {
        this.setState({ err });
      });
  };


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
        <Input
          title={"Description"}
          value={this.state.newBeer.description}
          name={"description"}
          handleChange={e => this.handleInput(e)}
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
        <div>
        <button onClick= {e => this.handleFormSubmit(e)} >Submit Beer</button>
        </div>
      </form>
    );
  }
}
