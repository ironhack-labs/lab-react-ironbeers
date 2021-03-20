import axios from "axios";
import React, { Component } from "react";
import Header from "./../components/Header"

class FormBeer extends Component {
  state = {
    name: "",
    tagline:"",
    description:"",
    first_brewed:"",
    brewers_tips:"",
    attenuation_level: 0,
    contributed_by: "",
  };



  handleChange = (event) => {
    const key = event.target.name;
    this.setState({ [key]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("clickty click");

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", {
        name: this.state.name,
        tagline: this.state.tagline,
        description: this.state.description,
        first_brewed: this.state.first_brewed,
        brewers_tips: this.state.brewers_tips,
        attenuation_level: this.state.attenuation_level,
        contributed_by: this.state.contributed_by
    
      })
      .then((response) => {
         this.setState({
            name: "",
            tagline:"",
            description:"",
            first_brewed:"",
            brewers_tips:"",
            attenuation_level: 0,
            contributed_by: "",
         });
        this.props.history.push("/beers");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
        <div>
             <Header/>
      <form method="" onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            onChange={this.handleChange}
            value={this.state.name}
            name="name"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="tagline">Tagline</label>
          <input
            name="tagline"
            value={this.state.tagline}
            onChange={this.handleChange}
            type="text"
            id="tagline"
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
            type="text"
            id="description"
          />
        </div>
        <div>
          <label htmlFor="first_brewed">First brewed</label>
          <input
            name="first_brewed"
            value={this.state.first_brewed}
            onChange={this.handleChange}
            type="text"
            id="first_brewed"
          />
        </div>
        <div>
            <label htmlFor="brewers_tips">Brewers tips</label>
            <input type="text"
             id="brewers_tips"
             name="brewers_tips"
             onChange={this.handleChange}
             value={this.state.brewers_tips}
             />
        </div>
        <div>
          <label htmlFor="attenuation_level"> Attenuation level</label>
          <input
            onChange={this.handleChange}
            value={this.state.attenuation_level}
            name="attenuation_level"
            type="number"
            id="attenuation_level"
          />
        </div>
        <div>
          <label htmlFor="contributed_by">Contributed by</label>
          <input
            name="contributed_by"
            value={this.state.contributed_by}
            onChange={this.handleChange}
            type="text"
            id="contributed_by"
          />
        </div>
        
        <button>Submit</button>
      </form>
      </div>
    );
  }
}

export default FormBeer;
