import React, { Component } from "react";
import "./App.css";
import Router from "./Router";
import { getBeers, postBeer } from "./services/beers";
import UIkit from "uikit";

class App extends Component {
  state = {
    beers: [],
    beer: {
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      brewers_tips: "",
      attenuation_level: 0,
      contributed_by: ""
    },
    error: {}
  };

  componentDidMount() {
    getBeers()
      .then(beers => {
        this.setState({ beers });
      })
      .catch(error => {
        this.setState({ error });
      });
  }

  handleChange = e => {
    let { beer } = this.state;
    const field = e.target.name;
    beer[field] = e.target.value;
    this.setState({ beer });
  };

  handleSubmit = e => {
    e.preventDefault();
    let { beer } = this.state;
    postBeer(beer).then(newBeer => {
      beer = {
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: ""
      };
      console.log(beer);
      this.setState({ beer });
      UIkit.notification({
        message: `<div class="uk-text-center"><span uk-icon="icon:check"></span>${newBeer.message}</div>`,
        status: "success",
        pos: "top-center"
      });
    });
  };

  render() {
    const { beers, beer } = this.state;
    return (
      <div className="App">
        <Router
          beers={beers}
          beer={beer}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
