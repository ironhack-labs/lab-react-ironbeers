import React, { Component } from "react";
import Header from "./Header";
import axios from "axios";

export default class NewBeer extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      tagline: "",
      image_url: "",
      contributed_by: ""
    };
  }

  componentDidMount() {
    this.createBeer();
  }

  updateFormData(e, formField) {
    let newState = { ...this.state };
    newState[formField] = e.target.value;

    this.setState(newState);
  }

  createBeer() {
    const { name, tagline, contributed_by, image_url } = this.state;

    axios.post("http://localhost:5000/new", { name, tagline, contributed_by, image_url })
    .then(beers => {
      this.setState({
        ...this.state,
        beers: beers.data
      });
    });
  }

  sendState(e) {
    e.preventDefault();
    this.createBeer(e);
    window.location.href = "http://localhost:3000/beers";
  }

  render() {
    return (
      <>
        <Header />
        <div className="container">
          <form className="form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Name of the Beer"
                value={this.state.name}
                onChange={e => this.updateFormData(e, "name")}
              ></input>
            </div>

            <div className="form-group">
              <input
                type="text"
                name="tagline"
                placeholder="Tagline"
                value={this.state.tagline}
                onChange={e => this.updateFormData(e, "tagline")}
              ></input>
            </div>

            <div className="form-group">
              <input
                type="text"
                name="image-url"
                placeholder="Image Url"
                value={this.state.image_url}
                onChange={e => this.updateFormData(e, "image-url")}
              ></input>
            </div>

            <div className="form-group">
              <input
                type="text"
                name="contributed_by"
                placeholder="Contributed by"
                value={this.state.contributed_by}
                onChange={e => this.updateFormData(e, "contributed_by")}
              ></input>
            </div>

            <button
              className="btn btn-primary"
              onClick={e => this.sendState(e)}
            >
              Add new Beer
            </button>

            {JSON.stringify(this.state)}
          </form>
        </div>
      </>
    );
  }
}
