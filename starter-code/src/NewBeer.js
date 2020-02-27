import React from "react";
import "./Beers.css";


class NewBeer extends React.Component {
  render() {
    return (
      <form
        action="https://ih-beers-api2.herokuapp.com/beers/new"
        method="POST"
      >
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" />
        <label for="tagline">Tagline:</label>
        <input type="text" id="tagline" name="tagline" />
        <label for="description">description:</label>
        <input type="text" id="description" name="description" />
        <label for="first_brewed">FirstBrewed:</label>
        <input type="text" id="first_brewed" name="first_brewed" />
        <label for="brewers_tips">BrewersTips:</label>
        <input type="text" id="brewers_tips" name="brewers_tips" />
        <label for="attenuation_level">Attenuationlevel:</label>
        <input type="number" id="attenuation_level" name="attenuation_level" />
        <label for="contributed_by">ContributedBy:</label>
        <input type="text" id="contributed_by" name="contributed_by" />
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}
export default NewBeer;
