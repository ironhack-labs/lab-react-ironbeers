import React, { Component } from "react";
import NavBar from "./NavBar";
import Service from "../service/Service";
import "./NewBeer.css";
import { Redirect } from "react-router-dom";
import AllBeers from "./AllBeers";

export default class NewBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: []
    };
    this.Service = new Service();
    this.getBeers();
  }

  renderRedirect = () => {
    return <Redirect to="/Beers" />;
  };

  getBeers = () => {
    this.Service.getBeers()
      .then(beers => {
        this.setState({ ...this.state, beers: beers });
      })
      .catch(err => console.log(err));
  };

  addNewBeer = newBeer => {
    this.Service.addBeer().then();
    let newState = {
      ...this.state
    };

    newState.beers.push(newBeer);
    this.setState(newBeer);
  };

  handlerChange = e => {
    let inputName = e.target.name;
    let inputValue = e.target.value;
    this.setState({ ...this.state, [inputName]: inputValue });
    console.log(inputValue);
  };

  handlerSubmit = e => {
    e.preventDefault();
    let {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by
    } = this.state;
    this.Service.addBeer({
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by
    }).then(response => {
      this.setState(
        {
          ...this.state,
          name: "",
          tagline: "",
          description: "",
          first_brewed: "",
          brewers_tips: "",
          attenuation_level: "",
          contributed_by: ""
        },
        () => {
          this.renderRedirect();
          this.getBeers();
        }
      );
    });
  };

  render() {
    return (
      <div>
        <NavBar />
        <form onSubmit={e => this.handlerSubmit(e)}>
          <input
            type="text"
            placeholder="Name"
            value={this.state.beers.name}
            name="name"
            onChange={e => this.handlerChange(e)}
          />
          <input
            type="text"
            placeholder="Tagline"
            value={this.state.beers.tagline}
            name="tagline"
            onChange={e => this.handlerChange(e)}
          />
          <input
            type="textarea"
            placeholder="Description"
            value={this.state.beers.description}
            name="description"
            onChange={e => this.handlerChange(e)}
          />
          <input
            type="text"
            placeholder="first_brewed"
            value={this.state.beers.first_brewed}
            name="first_brewed"
            onChange={e => this.handlerChange(e)}
          />
          <input
            type="textarea"
            placeholder="Brewers_tips"
            value={this.state.beers.brewers_tips}
            name="brewers_tips"
            onChange={e => this.handlerChange(e)}
          />
          <input
            type="number"
            placeholder="attenuation_level"
            value={this.state.beers.attenuation_level}
            name="attenuation_level"
            onChange={e => this.handlerChange(e)}
          />
          <input
            type="text"
            placeholder="contributed_by"
            value={this.state.beers.contributed_by}
            name="contributed_by"
            onChange={e => this.handlerChange(e)}
          />
          <button type="submit">New Beer</button>
        </form>
      </div>
    );
  }
}
