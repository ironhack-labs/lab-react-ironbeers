import React, { Component } from "react";
import HomeButton from "../components/HomeButton";
import axios from "axios";

export default class NewBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      brewers_tips: "",
      attenuation_level: "",
      contributed_by: "",
    };
  }

  //SO actually here I tried to refactor for like two hours to have just one handler for everything but couln't find the right way to do it even though I tried following what's on the platform and what franck showed us so I decided to send the lab this way, but I would really like to know what I'm missing here

  handleNameInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleTaglineInput = (event) => {
    this.setState({
      tagline: event.target.value,
    });
  };
  handleDescriptionInput = (event) => {
    this.setState({
      description: event.target.value,
    });
  };
  handleFirstBrewedInput = (event) => {
    this.setState({
      first_brewed: event.target.value,
    });
  };
  handleBrewerTipsInput = (event) => {
    this.setState({
      brewers_tips: event.target.value,
    });
  };
  handleAttenuationLevelInput = (event) => {
    this.setState({
      attenuation_level: Number(event.target.value),
    });
  };
  handleContributedByInput = (event) => {
    this.setState({
      contributed_by: event.target.value,
    });
  };

  handleInput = (event) => {
    const test = {};
    test.append("name", event.target.value);
  };

  handleForm = (event) => {
    event.preventDefault();
    this.setState({
      state: event.target.value,
    });
    const newBeer = this.state;
    console.log(newBeer);
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
      .then((res) => {
        this.props.history.push("/");
        console.log(res);
      })
      .catch((apiError) => {
        console.log(apiError);
      });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <HomeButton />
        <h1 className="allbeers-title">NEW BEER</h1>

        <div className="beerform">
          <form onSubmit={this.handleForm}>
            <div>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={(e) => this.handleNameInput(e)}
              />
            </div>
            <div>
              <label>Tagline</label>
              <input
                type="text"
                name="tagline"
                value={this.state.tagline}
                onChange={(e) => this.handleTaglineInput(e)}
              />
            </div>
            <div>
              <label>Description</label>
              <input
                type="text"
                name="description"
                value={this.state.description}
                onChange={(e) => this.handleDescriptionInput(e)}
              />
            </div>
            <div>
              <label>First brewed</label>
              <input
                type="text"
                name="first_brewed"
                value={this.state.first_brewed}
                onChange={(e) => this.handleFirstBrewedInput(e)}
              />
            </div>
            <div>
              <label>Brewer tips</label>
              <input
                type="text"
                name="brewers_tips"
                value={this.state.brewers_tips}
                onChange={(e) => this.handleBrewerTipsInput(e)}
              />
            </div>
            <div>
              <label>Attenuation level</label>
              <input
                type="number"
                name="attenuation_level"
                value={this.state.attenuation_level}
                onChange={(e) => this.handleAttenuationLevelInput(e)}
              />
            </div>
            <div>
              <label>Contributed by</label>
              <input
                type="text"
                name="contributed_by"
                value={this.state.contributed_by}
                onChange={(e) => this.handleContributedByInput(e)}
              />
            </div>

            <input type="submit" value="submit" />
          </form>
        </div>
      </div>
    );
  }
}
