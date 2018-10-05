import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import axios from "axios";

export default class SingleBeerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:props.name,
      tagline:props.tagline,
      description:props.description,
      first_brewed:props.first_brewed,
      brewers_tips:props.brewers_tips,
      attenuation_level:props.attenuation_level,
      contributed_by:props.contributed_by
    };
  }

  submitForm = e => {
    console.log(this.state)
    let url = "https://ironbeer-api.herokuapp.com/beers/new";
    axios.post(url,this.state).then(e => {
      this.setState({ name: "ok" });
    });
  }

  render() {
    let {name,tagline,description,first_brewed,brewers_tips,attenuation_level,contributed_by} = this.state
    return (
      <div>
        <NavBar />
        <Link to={"/random-beer"}>
          <h2>Random Beer</h2>
        </Link>
        <Link to={"/beers"}>
          <h2>All beers</h2>
        </Link>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={e => this.setState({ name: e.currentTarget.value })}
          />
          <label>Tagline</label>
          <input
            type="text"
            value={tagline}
            onChange={e =>
              this.setState({ tagline: e.currentTarget.value })
            }
          />
           <label>Description</label>
          <input
            type="text"
            value={description}
            onChange={e => this.setState({ description: e.currentTarget.value })}
          />
           <label>first_brewed</label>
          <input
            type="text"
            value={first_brewed}
            onChange={e => this.setState({ first_brewed: e.currentTarget.value })}
          />
           <label>brewers_tips</label>
          <input
            type="text"
            value={brewers_tips}
            onChange={e => this.setState({ brewers_tips: e.currentTarget.value })}
          />
           <label>attenuation_level</label>
          <input
            type="text"
            value={attenuation_level}
            onChange={e => this.setState({ attenuation_level: e.currentTarget.value })}
          />
           <label>contributed_by</label>
          <input
            type="text"
            value={contributed_by}
            onChange={e => this.setState({ contributed_by: e.currentTarget.value })}
          />
          <button onClick={this.submitForm}>Add new Beer</button>
        </div>
      </div>
    );
  }
}
