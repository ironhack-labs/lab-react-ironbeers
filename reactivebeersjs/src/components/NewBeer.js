import React, { Component } from 'react';
import Header from "./Header"

class NewBeer extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <Header></Header>
        <form action="https://ih-beer-api.herokuapp.com/beers/new" method="POST">
          First name:
          <input type="text" name="name" /><br/>
          Tagline:
          <input type="text" name="tagline" /><br />
          Description:
          <input type="text" name="description" /><br />
          First Brewed:
          <input type="text" name="first_brewed" /><br />
          Browser Tips:
          <input type="text" name="brewers_tips" /><br />
          Attenuation level:
          <input type="number" name="attenuation_level" /><br />
          contributed by:
          <input type="text" name="contributed_by" /><br />
          <button type="submit">create beer</button>
        </form>
      </div>
    );
  }
}

export default NewBeer;