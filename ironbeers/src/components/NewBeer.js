import React, { Component } from "react";
import Header from "./Header.js";
import axios from "axios";



export default class Beers extends Component {
    constructor() {
      super();
      this.state = {
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        contributed_by: "",
        attenuation_level: ""
      };
    }


handleFormSubmit = (event) => {
    event.preventDefault();
    const name = this.state.name;
    const tagline = this.state.tagline;
    const description = this.state.description;
    const first_brewed = this.state.first_brewed;
    const brewers_tips = this.state.brewers_tips;
    const contributed_by = this.state.contributed_by;
    const attenuation_level = this.state.attenuation_level;
    axios.post("https://ironbeer-api.herokuapp.com/beers/new", { name, tagline, description, first_brewed, brewers_tips, contributed_by, attenuation_level })
    .then(() => {
        //this.props.getData();
        this.setState({name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        contributed_by: "",
        attenuation_level: ""});
    })
    .catch( error => console.log(error.response) )
  }



    handleChange = (e) => {
        this.setState({ name: e.target.value1, tagline: e.target.value2, description: e.target.value3, first_brewed: e.target.value4, brewers_tips: e.target.value5, contributed_by: e.target.value6, attenuation_level:e.target.value7 });
      };
  
    render() {

      return (
        <div>
            <Header />
            <form onSubmit={this.handleFormSubmit}>
                <input type="text" name="name" value={this.state.name} onChange={ e => this.handleChange(e)}/>
                <input type="text" name="tagline" value={this.state.tagline} onChange={ e => this.handleChange(e)}/>
                <input type="text" name="description" value={this.state.description} onChange={ e => this.handleChange(e)}/>
                <input type="text" name="first_brewed" value={this.state.first_brewed} onChange={ e => this.handleChange(e)}/>
                <input type="text" name="brewers_tips" value={this.state.brewers_tips} onChange={ e => this.handleChange(e)}/>
                <input type="text" name="contributed_by" value={this.state.contributed_by} onChange={ e => this.handleChange(e)}/>
                <input type="text" name="attenuation_level" value={this.state.attenuation_level} onChange={ e => this.handleChange(e)}/>
                <input type="submit" value="Submit" />
            </form>
        </div>
      );
    }
  }