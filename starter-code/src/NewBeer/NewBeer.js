import React, { Component } from "react";
import { Link } from "react-router-dom";

// import "./NewBeer.css";

class NewBeer extends Component {
  handleSubmit(e) {
    let data = new FormData(e.target);
    console.log(data);
    console.log(this.props);
    e.preventDefault();
    this.props.addBeeer(data);
  }

  render() {
    return (
      <div className="NewBeer">
        <Link to="/">Home</Link>
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                name="name"
                className="input"
                type="text"
                value="name"
                placeholder="Text input"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">tagline</label>
            <div className="control">
              <input
                name="tagline"
                className="input"
                type="text"
                value="tagline"
                placeholder="Text input"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">description</label>
            <div className="control">
              <input
                name="description"
                className="input"
                type="text"
                value="description"
                placeholder="Text input"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">first_brewed</label>
            <div className="control">
              <input
                name="first_brewed"
                className="input"
                type="text"
                value="first_brewed"
                placeholder="Text input"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">brewers_tips</label>
            <div className="control">
              <input
                name="brewers_tips"
                className="input"
                type="text"
                value="brewers_tips"
                placeholder="Text input"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">attenuation_level</label>
            <div className="control">
              <input
                name="attenuation_level"
                className="input"
                type="number"
                value="1"
                placeholder="Text input"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">contributed_by</label>
            <div className="control">
              <input
                name="contributed_by"
                className="input"
                type="text"
                value="contributed_by"
                placeholder="Text input"
              />
            </div>
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default NewBeer;
