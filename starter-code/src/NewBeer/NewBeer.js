import React, { Component } from "react";
import { Link } from "react-router-dom";

// import "./NewBeer.css";

class NewBeer extends Component {
  handleSubmit(e) {
    console.log(this.props);
    e.preventDefault();
    let data = new FormData(e.target);
    console.log(data);
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
                htmlFor="name"
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
                htmlFor="tagline"
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
                htmlFor="description"
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
                htmlFor="first_brewed"
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
                htmlFor="brewers_tips"
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
                nahtmlForme="attenuation_level"
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
                htmlFor="contributed_by"
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
