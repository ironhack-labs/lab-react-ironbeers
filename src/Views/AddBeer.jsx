import React, { Component } from 'react';
import Header from '../Components/Header';
import axios from 'axios';
import '../styles/AddBeer.css';

class AddBeer extends Component {
  state = {
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewer_tips: "",
    attenuation_level: 0,
    contributed_by: ""
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    axios.post("https://ih-beers-api2.herokuapp.com/beers/new", {
      name: this.state.name,
      tagline: this.state.tagline,
      description: this.state.description,
      first_brewed: this.state.first_brewed,
      brewer_tips: this.state.brewer_tips,
      attenuation_level: this.state.attenuation_level,
      contributed_by: this.state.contributed_by
    })
    .then(response => {
      console.log(response);
      this.props.history.push("/beers");
    })
    .catch(error => console.log(error));
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Header />
        <div className="AddBeer__container">
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="name">Name</label><br/>
              <input type="text" name="name" id="name" 
              onChange={this.handleChange} />
            </div>

            <div>
              <label htmlFor="tagline">Tagline</label><br/>
              <input type="text" name="tagline" id="tagline"
              onChange={this.handleChange} />
            </div>

            <div>
              <label htmlFor="desc">Description</label><br/>
              <textarea id="desc" name="description" rows="5" cols="20"
              onChange={this.handleChange}></textarea>
            </div>

            <div>
              <label htmlFor="firstBrewed">First brewed</label><br/>
              <input type="text" id="firstBrewed" name="first_brewed"
              onChange={this.handleChange} />
            </div>

            <div>
              <label htmlFor="brewersTips">Brewers tips</label><br/>
              <input type="text" id="brewersTips" name="brewers_tips"
              onChange={this.handleChange} />
            </div>

            <div>
              <label htmlFor="attenuationLvl">Attenuation level</label><br/>
              <input type="number" id="attenuationLvl" name="attenuation_level" 
              onChange={this.handleChange} />
            </div>

            <div>
              <label htmlFor="contributed">Created by</label><br/>
              <input type="text" id="contributed" name="contributed_by"
              onChange={this.handleChange} />
            </div>

            <button className="AddBeer__btn">ADD NEW BEER</button>
          </form>
        </div>
      </div>
    )
  }
}

export default AddBeer
