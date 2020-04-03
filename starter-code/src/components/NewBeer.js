import React, { Component } from "react";
import axios from "axios";
import Navbar from "./Navbar";

class NewBeer extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", image_url: "",description:"",tagline:"", first_brewed:"",brewers_tips:"",attenuation_level: "",contributed_by:"" };
  }

  handleFormSubmit = async event => {
    event.preventDefault();
    const name = this.state.name;
    const image_url = this.state.image_url;
    const description = this.state.description
    const tagline = this.state.tagline
    const first_brewed = this.state.first_brewed
    const brewers_tips = this.state.brewers_tips
    const attenuation_level = this.state.attenuation_level
    const contributed_by = this.state.contributed_by
    try{
        await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", { name, image_url, description, tagline, first_brewed,brewers_tips,attenuation_level,contributed_by})
             this.setState({name: "", image_url: "",description:"",tagline:"", first_brewed:"",brewers_tips:"",attenuation_level: "",contributed_by:"" });
    }catch(error){
    console.log(error)
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
        <div>
        <Navbar/>
      <div className ="d-flex justify-content-center">
        <form className="d-flex flex-column justify-content-center formBeer text-center align-items-center" onSubmit={this.handleFormSubmit}>
          <label>name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={e => this.handleChange(e)}
          />
          <label>image:</label>
          <input
          type="text"
            name="image_url"
            value={this.state.image_url}
            onChange={e => this.handleChange(e)}
          />
          <label>description:</label>
          <input
          type="text"
            name="description"
            value={this.state.description}
            onChange={e => this.handleChange(e)}
          />
          <label>tagline:</label>
          <input
          type="text"
            name="tagline"
            value={this.state.tagline}
            onChange={e => this.handleChange(e)}
          />
          <label>first brewed:</label>
          <input
          type="text"
            name="first_brewed"
            value={this.state.first_brewed}
            onChange={e => this.handleChange(e)}
          />
          <label>brewers tips:</label>
          <input
          type="text"
            name="brewers_tips"
            value={this.state.brewers_tips}
            onChange={e => this.handleChange(e)}
          />
          <label>attenuation level:</label>
          <input
          type="number"
            name="attenuation_level"
            value={this.state.attenuation_level}
            onChange={e => this.handleChange(e)}
          />

    
          <label>contributed by:</label>
          <input
          type="text"
            name="contributed_by"
            value={this.state.contributed_by}
            onChange={e => this.handleChange(e)}
          />


          <input type="submit" value="Submit" />
        </form>
      </div>
      </div>
    );
  }
}

export default NewBeer;