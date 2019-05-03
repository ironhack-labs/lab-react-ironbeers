import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios"

export default class NewBeer extends Component {
  state = {
    name: "",
    tagline: "",
    contributed_by: "",
    image_url: ""
  };

  dataUpdate(val, key) {
    this.setState({
      ...this.state,
      [key]: val
    });
  }

  addNewBeer() {
    if (this.state.name.trim().length === 0) return;

    axios
      .post("http://localhost:5000/new", { ...this.state })
      .then(allTheBeer => {
        this.setState({
          ...this.state,
          name: "",
          tagline: "",
          contributed_by: "",
          image_url: ""
        });
      });
  }

  render() {
    return (
      <form>
        <h1>New Beer</h1>
        <input
          type="text"
          placeholder="Add a new beer"
          value={this.state.name}
          onChange={e => this.dataUpdate(e.target.value, "name")}
        />
        <input
          type="text"
          placeholder="tagline"
          value={this.state.tagline}
          onChange={e => this.dataUpdate(e.target.value, "tagline")}
        />
        <input
          type="text"
          placeholder="contributor"
          value={this.state.contributed_by}
          onChange={e => this.dataUpdate(e.target.value, "contributed_by")}
        />
        <input
          type="text"
          placeholder="Add an image"
          value={this.state.image_url}
          onChange={e => this.dataUpdate(e.target.value, "image_url")}
        />
        <input
          type="button"
          value="Add new Beer"
          onClick={() => this.addNewBeer()}
        />
      </form>
    );
  }
}
