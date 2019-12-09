import React, { Component } from 'react';
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import "./newBeer.scss";

class NewBeer extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      brewers_tips: "",
      attenuation_level: "",
      contributed_by: "",
    }
  }

  inputHandler = (e) => {  
    this.setState({
      [e.target.name]: e.target.value
    })    
  }

  submitFormHandler = (e) => {
    e.preventDefault();
    axios.post(`https://ih-beers-api2.herokuapp.com/beers/new`, this.state)
    .then(response => console.log(response))
    .catch(error => console.log(error));

    this.setState({
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      brewers_tips: "",
      attenuation_level: "",
      contributed_by: "",
  })
  }

  render() {
    return (
      <div className="new-beer-container">
        <div>
          <Navbar />
        </div>  
          <form className="col-6" onSubmit={this.submitFormHandler}>
          <div className="form-group">
            <label htmlFor="input-name">Name</label>
            <input type="text" className="form-control" id="input-name" name="name" value={this.state.name} onChange={this.inputHandler}/>          
          </div>
          <div className="form-group">
            <label htmlFor="tagline">Tagline</label>
            <input type="text" className="form-control" id="tagline" name="tagline" value={this.state.tagline} onChange={this.inputHandler}/>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea className="form-control" id="description" name="description" value={this.state.description} onChange={this.inputHandler}></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="first-brewed">First brewed</label>
            <input type="number" className="form-control" id="first-brewed" name="first_brewed" value={this.state.first_brewed} onChange={this.inputHandler} />
          </div>
          <div className="form-group">
            <label htmlFor="brewers-tips">Brewers tips</label>
            <input type="text" className="form-control" id="brewers-tips" name="brewers_tips" value={this.state.brewers_tips} onChange={this.inputHandler}/>
          </div>
          <div className="form-group">
            <label htmlFor="attenuation">Attenuation level</label>
            <input type="number" className="form-control" id="attenuation" min="0" max="50" name="attenuation_level" value={this.state.attenuation_level} onChange={this.inputHandler}/>
          </div>
          <div className="form-group">
            <label htmlFor="contributed">Contributed by</label>
            <input type="type" className="form-control" id="contributed" name="contributed_by" value={this.state.contributed_by} onChange={this.inputHandler}/>
          </div>
          <button type="submit" className="btn btn-primary">Add new</button>
        </form>
    </div>
    )  
  }
}

export default NewBeer;
