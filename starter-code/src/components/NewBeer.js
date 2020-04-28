import React, { Component } from 'react';
import Header from './Header'
import axios from 'axios';

class NewBeer extends Component {

  state= {
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: ""

  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };


  handleSubmit = () =>{
    axios.post("https://ih-beers-api2.herokuapp.com/beers/new", this.state )
  }

  render() {
    const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by} = this.state;
    return (
      <div>
        <Header />
        <div>
            <div>
                <label htmlFor="name">name</label>
                <input type="text" value={name} name="name" onChange={this.handleInput}/>
            </div>
            <div>
                <label htmlFor="tagline">tagline</label>
                <input type="text" value={tagline} name="tagline" onChange={this.handleInput}/>
            </div>
            <div>
                <label htmlFor="description">description</label>
                <textarea value={description} name="description" onChange={this.handleInput}/>
            </div>
            <div>
                <label htmlFor="firest_brewed">first brewed</label>
                <input type="text" value={first_brewed} name="first_brewed" onChange={this.handleInput}/>
            </div>
            <div>
                <label htmlFor="brewers_tips">brewers tip</label>
                <input type="text" value={brewers_tips} name="brewers_tips" onChange={this.handleInput}/>
            </div>
            <div>
                <label htmlFor="attenuation_level">attenuation level</label>
                <input type="number" value={attenuation_level} name="attenuation_level" onChange={this.handleInput}/>
            </div>
            <div>
                <label htmlFor="contributed_by">contributed by</label>
                <input type="text" value={contributed_by} name="contributed_by" onChange={this.handleInput}/>
            </div>
            <div>
              <button onClick={this.handleSubmit}>create new</button>
            </div>
        </div>
      </div>
    );
  }
}

export default NewBeer;