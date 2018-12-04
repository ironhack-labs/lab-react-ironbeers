import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import axios from "axios";

import Header from "./Header.js";

import "./AddBeer.css";

class AddBeer extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      brewers_tips: "",
      attenuation_level: "",
      contributed_by: "",
      isSubmitSuccessful: false,
    }
  }

  genericSync(event){
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  handleSubmit(event){
    // stop the page refresh
    event.preventDefault();
    
    // PUT and POST requests receive a 2nd argument : the info to submit
    // (we are submitting the state we've gathered from the form)
    axios.post("https://ironbeer-api.herokuapp.com/beers/new", this.state)
      .then(response => {
        console.log("Add Beer SUCCESS", response.data);
        this.setState( { isSubmitSuccessful: true } );
      })
      .catch(err => {
        console.log("Add Beer ERROR", err);
        alert("Sorry! Something went wrong.")
      })
  }

  render(){

    if (this.state.isSubmitSuccessful){
      //redirect back to the phone list page if the form submission worked
      return <Redirect to ="/all-beers" />
    }

    return(
      <section className="AddBeer">
        <Header />
        <h2>Add Beer</h2>
        
        <form onSubmit={event => this.handleSubmit(event)}>

          <label>
            Name :
            <input onChange={event => this.genericSync(event)}
                   value={this.state.name}
                   type="text" name="name" placeholder="Desperados" />
          </label>

          <label>
            Tagline :
            <input onChange={event => this.genericSync(event)}
                   value={this.state.tagline}
                   type="text" name="tagline" placeholder="Women beer" />
          </label>

          <label>
            Description :
            <input onChange={event => this.genericSync(event)}
                   value={this.state.description}
                   type="text" name="description" placeholder="This beer is really good" />
          </label>

          <label>
            First Brewed :
            <input onChange={event => this.genericSync(event)}
                   value={this.state.first_brewed}
                   type="text" name="first_brewed" placeholder="01/2016" />
          </label>

          <label>
            Brewers Tips :
            <input onChange={event => this.genericSync(event)}
                   value={this.state.brewers_tips}
                   type="text" name="brewers_tips" placeholder="Drink with lemon" />
          </label>

          <label>
            Tagline :
            <input onChange={event => this.genericSync(event)}
                   value={this.state.attenuation_level}
                   type="number" name="attenuation_level" placeholder="10.9" />
          </label>

          <label>
            Contributed by :
            <input onChange={event => this.genericSync(event)}
                   value={this.state.contributed_by}
                   type="text" name="contributed_by" placeholder="Mr. Blah" />
          </label>

          <button>Add New Beer</button>

        </form>

      </section>
    )
  }
}

export default AddBeer;