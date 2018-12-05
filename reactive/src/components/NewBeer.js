import React, { Component } from "react";
import axios from "axios";

class NewBeer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      brewers_tips: "",
      attenuation_level: "",
      contributed_by: ""
    }
  }

  synchro(event) {
    const { name, value } = event.target;

    this.setState({[name]: value});
  }

  addNew(event) {
    event.preventDefault();

    axios.post("https://ironbeer-api.herokuapp.com/beers/new", this.state)
    .then(response => {
      console.log("Server response", response.data);
      // this.setState(response.body);
    })
    .catch(err => {
      console.log("An error occured.", err)
    })
  }


  render() {
    return(
      <form onSubmit={event => this.addNew(event)}>
        <label>
          Name: <input value={this.state.name} 
            onChange={event => this.synchro(event)} type="text" name="name" />
        </label>

        <label>
          Tagline: <input value={this.state.tagline} 
            onChange={event => this.synchro(event)} type="text" name="tagline" />
        </label>

        <label>
          Description: <input value={this.state.description} 
            onChange={event => this.synchro(event)} type="text" name="description" />
        </label>

        <label>
          First brewed: <input value={this.state.first_brewed} 
            onChange={event => this.synchro(event)} type="text" name="first_brewed" />
        </label>

        <label>
          Brewer tips: <input value={this.state.brewers_tips} 
            onChange={event => this.synchro(event)} type="text" name="brewers_tips" />
        </label>

        <label>
          Attenuation level: <input value={this.state.attenuation_level} 
            onChange={event => this.synchro(event)} type="number" name="attenuation_level" />
        </label>

        <label>
          Contributed by: <input value={this.state.contributed_by} 
            onChange={event => this.synchro(event)} type="text" name="contributed_by" />
        </label>

        <button>Add a New Beer</button>
      </form>
    )
  }
}

export default NewBeer;