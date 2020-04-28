import React, { Component } from 'react';
// import { Route, Link, Switch, withRouter } from "react-router-dom";
import Axios from 'axios';

// name - must be type text
// tagline - must be type text
// description - must be type text
// first_brewed - must be type text
// brewers_tips - must be type text
// attenuation_level - must be type number !!!
// contributed_by - must be type text

class NewBeer extends Component{

  state = {
    name : "",
    tagline : "",
    description : "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
    created : false,
  }

  handleInputChanges = (e) =>{
    this.setState({
      [e.target.name] : e.target.value,
    })
  }

  uploadNewBeer = () => {
    const {name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by} = this.state;
    const attenuation = parseInt(attenuation_level)
    console.log(attenuation)
    const newBeer = {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level: attenuation,
      contributed_by
    }

    Axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer) 
      .then((response) =>{
        console.log(response)
        this.setState({
          created: true
        })
      })

  }

  render(){
    const {name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by, created} = this.state;

    return(
      <div>

      {created && <h2>The beer was uploaded fine!</h2>}
      {!created &&
        <div>
        {/* Add new beer? */}
        <p><label for="name">Name</label></p>
        <input className="input" type="text" id="name" name="name" value={name} onChange={this.handleInputChanges} />

        <p><label for="tagline">Tagline</label></p>
        <input className="input" type="text" id="tagline" name="tagline" value={tagline} onChange={this.handleInputChanges} />

        <p><label for="description">Description</label></p>
        <input className="input" type="text" id="description" name="description" value={description} onChange={this.handleInputChanges} />

        <p><label for="first_brewed">First Brewed</label></p>
        <input className="input" type="text" id="first_brewed" name="first_brewed" value={first_brewed} onChange={this.handleInputChanges} />

        <p><label for="brewers_tips">Brewers tips</label></p>
        <input className="input" type="text" id="brewers_tips" name="brewers_tips" value={brewers_tips} onChange={this.handleInputChanges} />

        <p><label for="attenuation_level">Attenuation level</label></p>
        <input className="input" type="number" id="attenuation_level" name="attenuation_level" value={attenuation_level} onChange={this.handleInputChanges} />
      
        <p><label for="contributed_by">Contributed by</label></p>
        <input className="input" type="text" id="contributed_by" name="contributed_by" value={contributed_by} onChange={this.handleInputChanges} />
      
        <p><button onClick={this.uploadNewBeer}>Upload the new beer</button></p>      
        </div>
      }
      </div>
    )
  }
}

export default NewBeer