import React from "react";
import NavHome from "./NavHome";
import Axios from "axios";

class NewBeer extends React.Component {
  onSubmit = event => {
    event.preventDefault();
    let beer = {
      name: event.target.name.value,
      description: event.target.description.value,
      tagline: event.target.tagline.value,
      first_brewed: event.target.first_brewed.value,
      brewers_tips: event.target.brewers_tips.value,
      attenuation_level: event.target.attenuation_level.value,
      conributed_by: event.target.contributed_by.value
    };

    Axios.post("https://ih-beer-api.herokuapp.com/beers/new", beer)
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <NavHome />
        <form methode="POST" id="beer-create" onSubmit={this.onSubmit}>
          <label htmlFor="">Name</label>
          <input type="text" name="name" />
          <label htmlFor="">Description</label>
          <input type="text" id="description" name="description" />
          <label htmlFor="">Tagline</label>
          <input type="text" id="tagline" />
          <label htmlFor="">First brewed</label>
          <input type="text" id="first_brewed" />
          <label htmlFor="">Brewers Tips</label>
          <input type="text" id="brewers_tips" />
          <label htmlFor="">Attenuation_level</label>
          <input type="number" id="attenuation_level" />
          <label htmlFor="">Contributed by</label>
          <input type="text" id="contributed_by" />
          <button type="submit" form="beer-create">
            Create NewBeer
          </button>
        </form>
      </div>
    );
  }
}

export default NewBeer;
