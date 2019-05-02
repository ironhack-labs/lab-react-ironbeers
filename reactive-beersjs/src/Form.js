import React, { Component } from "react";
import Navbar from "./Navbar";
import axios from 'axios'

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: undefined,
      tagline: undefined,
      description: undefined,
      image_url: undefined,
      contributed_by: undefined
    };
  }

  changeFormData = (e, key) => {
    const newState = { ...this.state };
    newState[key] = e.target.value;

    this.setState(newState);
    
  };

  addBeer = () => {
    axios.post("http://localhost:5000/new", this.state )
      .then(beer => {
        debugger
      this.setState({
        ...this.state,
        name: undefined,
        tagline: undefined,
        description: undefined,
        image_url: undefined,
        contributed_by: undefined
      });
    });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Text input"
              value={this.state.name}
              onChange={e => this.changeFormData(e, "name")}
              required
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Tagline</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Text input"
              value={this.state.tagline}
              onChange={e => this.changeFormData(e, "tagline")}
              required
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Description</label>
          <div className="control">
            <input
              className="input"
              placeholder="input"
              value={this.state.description}
              onChange={e => this.changeFormData(e, "description")}
              required
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Image Url</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Text input"
              value={this.state.image_url}
              onChange={e => this.changeFormData(e, "image_url")}
              required
            />
          </div>
        </div>

 
        <div className="field">
          <label className="label">Contributed By</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Text input"
              value={this.state.contributed_by}
              onChange={e => this.changeFormData(e, "contributed_by")}
              required
            />
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link" onClick={() => this.addBeer()}>
              Submit
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
