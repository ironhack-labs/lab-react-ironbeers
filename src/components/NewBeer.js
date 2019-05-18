import React, { Component } from 'react'
import Nav from './Nav';
import axios from "axios";


export default class NewBeer extends Component {

  state = {
    name: "",
    tagline: "Please enter a tagline"
  }

updateName(n){
  this.setState({
    name: n.target.value
  })
}


  handleSubmit(e) {
    e.preventDefault();
    // console.log(e.target.elements.name.value);
    axios
      .post("https://ih-beer-api.herokuapp.com/beers/new", {
        name: e.target.elements.name.value,
        tagline: e.target.elements.tagline.value,
        description: e.target.elements.description.value,
        first_brewed: e.target.elements.firstbrewed.value,
        brewers_tips: e.target.elements.brewertips.value,
        attenuation_level: e.target.elements.attenuation.value,
        contributed_by: e.target.elements.contribute.value
      })
      .then(sentData => {
       console.log(sentData, "recieved");
       alert("Your beer has been saved!")
      });
  }




  render() {

    return (
      <div>
      <Nav />
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text"  name="name"/>
        </label>
        <br />
        <label>
          Tagline:
          <input type="text" name="tagline"/>
        </label>
        <label>
          Description:
          <input type="text" name="description"/>
        </label>
        <label>
          First Brewed:
          <input type="text" name="firstbrewed"/>
        </label>
        <label>
          Brewer Tips:
          <input type="text" name="brewertips"/>
        </label>
        <label>
          Attenuation Level(Number):
          <input type="number" name="attenuation"/>
        </label>
        <label>
          Contributed By:
          <input type="text" name="contribute"/>
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
    )
  }
}
