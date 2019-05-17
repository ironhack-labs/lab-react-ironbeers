import React, { Component } from 'react';
import axios from 'axios';

class NewBeer extends Component {

  getnewbeer (e) {
    e.preventDefault();
    console.log(e.target.elements.name.value)
    axios.post("https://ih-beer-api.herokuapp.com/beers/new",{
    name: e.target.elements.name.value,
    tagline: e.target.elements.tagLine.value,
    description: e.target.elements.description.value,
    first_brewed: e.target.elements.firstBrewed.value,
    brewers_tips: e.target.elements.brewersTips.value,
    attenuation_level: e.target.elements.attenuationLevel.value,
    contributed_by: e.target.elements.contributedBy.value
    }

    )
    .then(newbeer =>{

    });

  
  }


  render() {
    return (
      <div>
        <form onSubmit={this.getnewbeer}>
        <h3>Name</h3>
        <input name="name" type="text"></input>
        <h3>Tagline</h3>
        <input name="tagLine" type="text"></input>
        <h3>Description</h3>
        <input name="description" type="text" ></input>
        <h3>First Brewed</h3>
        <input name="firstBrewed" type="text"></input>
        <h3>Brewers Tips</h3>
        <input name="brewersTips" type="text"></input>
        <h3>Attenuation Level</h3>
        <input name="attenuationLevel" type="number"></input>
        <h3>Contributed By</h3>
        <input name="contributedBy" type="text"></input>
        <br></br>
        <button>ADD NEW</button>
        </form>
      </div>
    );
  }
}

export default NewBeer;