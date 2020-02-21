import React, { Component } from "react";
import { Link, NavLink, Route, Switch } from "react-router-dom";

class NewBeer extends Component {
  render() {
    console.log("New Beer called");
    return (
      <div className="container">
        <form action="/new" method="POST" onSubmit={this.createNewBeer}>
          <div class="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Beer name"
              className="form-control"
            />

            <label htmlFor="tagline">Tagline</label>
            <input
              type="text"
              id="tagline"
              placeholder="Tagline"
              className="form-control"
            />

            <label htmlFor="description">Description</label>
            <input
              type="text"
              id="description"
              placeholder="Description"
              className="form-control"
            />

            <label htmlFor="first_brewed">First brewed</label>
            <input
              type="text"
              id="first_brewed"
              placeholder="First brewed"
              className="form-control"
            />

            <label htmlFor="brewers_tips">Brewers tips</label>
            <input
              type="text"
              id="brewers_tips"
              placeholder="Brewers tips"
              className="form-control"
            />

            <label htmlFor="attenuation_level">Attenuation level</label>
            <input
              type="number"
              id="attenuation_level"
              placeholder="Attenuation level"
              className="form-control"
            />

            <label htmlFor="contributed_by">Contributed by</label>
            <input
              type="text"
              id="contributed_by"
              placeholder="Contributed by"
              className="form-control"
            />

            <button type="submit" class="btn btn-primary">
              ADD NEW
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewBeer;
