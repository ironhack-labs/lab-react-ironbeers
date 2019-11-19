import React, { Component } from 'react';
import Axios from 'axios';
import homeicon from '../images/homeicon.png';

export class NewBeer extends Component {
  constructor() {
    super();
    this.state = {
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: "",
        message: ""
      
    };
  }
  handleInput = e => {
    // console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    });
  };

 submitNewBeer = e => {
    e.preventDefault();

    const beer = {
      name: this.state.name,
      tagline: this.state.tagline,
      description: this.state.description,
      first_brewed: this.state.first_brewed,
      brewers_tips: this.state.brewers_tips,
      attenuation_level: this.state.attenuation_level,
      contributed_by: this.state.contributed_by
    }
    
    console.log(beer)

    Axios.post("https://ih-beers-api2.herokuapp.com/beers/new", beer)
    .then(res => {
      console.log(res)
      this.setState({
        message: "Posted Successfully"
      })
    })
    .catch(err => {
      console.error(err)
      this.setState({
        message: "Error!"
      })
    })
  };

  render() {
    return (
      <div>
        <header className="homeiconbar">
          <a className="header-nav" href="/"><img src={homeicon} alt="" /></a>
        </header>
        <div className="container">
        <form className="beerform" onSubmit={this.submitNewBeer}>
          <div className="fieldgroup">
          <label>Name</label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleInput} />
          </div>
          <div className="fieldgroup">
          <label>Tagline</label>
          <input type="text" name="tagline" value={this.state.tagline} onChange={this.handleInput} />
          </div>
          <div className="fieldgroup">
          <label>Description</label>
          <input type="text" name="description" value={this.state.description} onChange={this.handleInput} />
          </div>
          <div className="fieldgroup">
          <label>First Brewed</label>
          <input type="text" name="first_brewed" value={this.state.first_brewed} onChange={this.handleInput} />
          </div>
          <div className="fieldgroup">
          <label>Brewer's Tips</label>
          <input type="text" name="brewers_tips" value={this.state.brewers_tips} onChange={this.handleInput} />
          </div>
          <div className="fieldgroup">
          <label>Attenuation level</label>
          <input type="number" name="attenuation_level" value={this.state.attenuation_level} onChange={this.handleInput} />
          </div>
          <div className="fieldgroup">
          <label>Contributed By</label>
          <input type="text" name="contributed_by" value={this.state.contributed_by} onChange={this.handleInput} />
          </div>
          <input type="submit" value="Add New Beer" />
        </form>
        </div>
      </div>
    )
  }
}

export default NewBeer
