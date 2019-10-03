import React, { Component } from "react";
import Header from "./Header";
import axios from "axios";

export default class NewBeer extends Component {
  constructor() {
    super();
    this.state = {
      beers: [],
      newBeer: {
        image_url: "",
        name: "",
        tagline: "",
        contributed_by: ""
      }
    };
  }
  componentDidMount() {
    axios.get("http://localhost:5000/all").then(response => {
      this.setState({ beers: response.data });
    });
  }
  addNewBeer() {
    if (
      this.state.newBeer ===
      {
        image_url: "",
        name: "",
        tagline: "",
        contributed_by: ""
      }
    )
      return;

    axios
      .post("http://localhost:5000/new", {
        newBeer: {
          image_url: this.state.newBeer["image_url"],
          name: this.state.newBeer["name"],
          tagline: this.state.newBeer["tagline"],
          contributed_by: this.state.newBeer["contributed_by"]
        }
      })
      .then(beers => {
        this.setState({
          ...this.state,
          newBeer: {
            image_url: "",
            name: "",
            tagline: "",
            contributed_by: ""
          },
          beers: beers.data
        });
      });
  }

  render() {
    return (
      <div>
        <Header />
        <img src="/images/new-beer.png" alt="" />
        <h1>New Beer</h1>
        <form className="add-beer">
          <input type="text" name="name" placeholder="name" />
          <input type="text" name="tagline" placeholder="tagline" />
          <input type="text" name="image_url" placeholder="image_url" />
          <input type="text" name="contributed_by" placeholder="contributed_by" />
          <input type="submit" onClick={() => this.addNewTask()} value="Add new" />
        </form>
      </div>
    );
  }
}
