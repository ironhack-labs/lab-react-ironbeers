import React, { Component } from "react";
import NavBar from "./NavBar";
import CardsBeer from "./CardsBeer";
import axios from "axios";

export default class RandomBeers extends Component {
  state = {
    name:"",
    tagline:"",
    description:"",
    first_brewed:"",
    brewers_tips:"",
    attenuation_level:"",
    constributed_by:""
  };

  handleOnChange(e){
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  handleForSubmit = (e) => {
    e.preventDefault()
    axios
      .post("https://ih-beer-api.herokuapp.com/beers/new", this.state)
      .then(response => console.log(response))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <>
        <form onSubmit={this.handleForSubmit}>
            <input type ="text" name="name" onChange={(e) => this.handleOnChange(e)}/>
            <input type ="text" name="tagline" onChange={(e) => this.handleOnChange(e)}/>  
            <input type ="text" name="description" onChange={(e) => this.handleOnChange(e)}/>  
            <input type ="text" name="first_brewed" onChange={(e) => this.handleOnChange(e)}/>
            <input type ="text" name="brewers_tips" onChange={(e) => this.handleOnChange(e)}/>
            <input type ="text" name="attenuation_level" onChange={(e) => this.handleOnChange(e)}/>  
            <input type ="text" name="contributed_by" onChange={(e) => this.handleOnChange(e)}/>      
            <input type ="submit" name="submit"/>       
        </form>
      </>
    );
  }
}

