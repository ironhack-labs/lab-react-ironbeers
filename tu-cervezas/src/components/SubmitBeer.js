import React, { Component } from 'react';
const apiEndpoint = "https://ironbeer-api.herokuapp.com/beers";

class SubmitBeer extends Component {
  state = {
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: ""
  }

  sendBeer = (e) => {
    e.preventDefault();
    const data = {
      ...this.state
    }

    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json" //Aguas con esto, es super importante
      },
      body: JSON.stringify(data)
    };

    fetch(`${apiEndpoint}/new`, options)
      .then(() => {
        alert("Thank you for submitting a new beer!");
        this.setState({
          name: "",
          tagline: "",
          description: "",
          first_brewed: "",
          brewers_tips: "",
          attenuation_level: 0,
          contributed_by: ""
        });
      }).catch(err => console.log(err));
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form className="beer-submit-form">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={this.state.name} placeholder="Name" onChange={e => this.handleChange(e)} />
        <label htmlFor="tagline">Tagline:</label>
        <input type="text" name="tagline" value={this.state.tagline} placeholder="Tagline" onChange={e => this.handleChange(e)} />
        <label htmlFor="description">Description:</label>
        <textarea name="description" id="" cols="30" rows="10" value={this.state.description} placeholder="Description" onChange={e => this.handleChange(e)} />
        <label htmlFor="first_brewed">First Brewed:</label>
        <input type="text" name="first_brewed" value={this.state.first_brewed} placeholder="First Brewed" onChange={e => this.handleChange(e)} />
        <label htmlFor="brewers_tips">Brewers' Tips:</label>
        <input type="text" name="brewers_tips" value={this.state.brewers_tips} placeholder="Brewers' Tips" onChange={e => this.handleChange(e)} />
        <label htmlFor="attenuation_level">Attenuation Level:</label>
        <input type="number" name="attenuation_level" value={this.state.attenuation_level} placeholder="Attenuation Level" onChange={e => this.handleChange(e)} />
        <label htmlFor="contributed_by">Contributed by:</label>
        <input type="text" name="contributed_by" value={this.state.contributed_by} placeholder="Contributed by" onChange={e => this.handleChange(e)} />
        <button onClick={e => this.sendBeer(e)}>Send Beer!</button>
      </form>
    )
  }
}

export default SubmitBeer;