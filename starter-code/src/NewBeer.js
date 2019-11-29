import React, { Component } from "react";
import axios from "axios";

export default class NewBeer extends Component {
  state = {
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenution_level: 0,
    contributed_by: ""
  };

  //   componentDidUpdate() {
  //     console.log("did  mount");
  //     const props = this.props;
  //     axios
  //       .post(`https://ih-beers-api2.herokuapp.com/beers/new`)
  //       .then(response => {
  //         // console.log(response.data.name);

  //         // console.log("Hellllloooo", props);

  //         this.setState({
  //           beer: response.data
  //         });
  //         console.log(this.state.beer);
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //     // console.log(this.state.beer);
  //   }

  onSubmit = event => {
    event.preventDefault();

    const {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenution_level
    } = this.state;
  };

  //   handlerChange = event => {
  //     const name = event.target.name;
  //     this.setState({
  //         event.target.name: event.target.value
  //     });
  //   };

  render() {
    console.log("state", this.state.name);
    return (
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={this.handlerChange}
          />
        </div>
        <div>
          <label htmlFor="tagline">Tagline</label>
          <input
            type="text"
            name="tagline"
            id="tagline"
            onChange={this.handlerChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            onChange={this.handlerChange}
          />
        </div>
        <div>
          <label htmlFor="first_brewed">First Brewed</label>
          <input type="text" name="first_brewed" id="first_brewed" />
        </div>
        <div>
          <label htmlFor="brewers_tips">Brewers Tips</label>
          <input type="text" name="brewers_tips" id="brewers_tips" />
        </div>
        <div>
          <label htmlFor="attenuation_level">Attenuation Level</label>
          <input
            type="number"
            name="attenuation_level"
            id="attenuation_level"
          />
        </div>
        <div>
          <label htmlFor="contributed_by">Contributed By</label>
          <input type="text" name="contributed_by" id="contributed_by" />
        </div>
        <button onSubmit={this.onSubmit}> Create new beer</button>
      </form>
    );
  }
}
