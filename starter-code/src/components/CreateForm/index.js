import React, { Component } from "react";
import { createBeer } from "../../services/beerService";
import HomeButton from "../HomeButton";

class CreateForm extends Component {
  state = {
    beer: {},
    formSuccess: false,
  };

  handleChange = (e) => {
    let { beer } = this.state;
    // spread operator allows for persistend data -> adding the key and value to the same object
    // "name" is the attribute in the form field, "value" is whatever value the field contains at the time
    beer = { ...beer, [e.target.name]: e.target.value };
    this.setState({ beer });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // create a museum using the the function in museumsService.js
    const { beer } = this.state;
    createBeer(beer)
      .then((res) => {
        console.log(res);
      })
      .catch((res) => console.error(res.response));

    this.setState({ formSuccess: true });
  };

  render() {
    return (
      <section>
        <h1 className="mb-2_5">Add a beer</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="mt-1">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={this.handleChange}
            />
          </div>

          <div className="mt-1">
            <label htmlFor="tagline">Tagline</label>
            <input
              type="text"
              name="tagline"
              id="tagline"
              onChange={this.handleChange}
            />
          </div>

          <div className="mt-1">
            <label htmlFor="tagline">Description</label>
            <input
              type="text"
              name="description"
              id="description"
              onChange={this.handleChange}
            />
          </div>

          <div className="mt-1">
            <label htmlFor="brewed">First Brewed</label>
            <input
              type="text"
              name="first_brewed"
              id="first_brewed"
              onChange={this.handleChange}
            />
          </div>

          <div className="mt-1">
            <label htmlFor="attenuation">Attenuation</label>
            <input
              type="number"
              step="any"
              name="attenuation_level"
              id="attenuation_level"
              onChange={this.handleChange}
            />
          </div>

          <button className="pt-1_5 pb-1_5 background-primary br-6 text-center no-decoration w-100 mt-1">
            Create
          </button>
        </form>

        {this.state.formSuccess ? (
          <h4 className="text-center mt-1_5">Beer posted successfully!</h4>
        ) : null}

        <HomeButton />
      </section>
    );
  }
}

export default CreateForm;
