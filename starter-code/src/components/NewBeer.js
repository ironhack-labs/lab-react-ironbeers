import React, { Component } from "react";
import Header from "./Header";
import axios from "axios";

class NewBeer extends Component {
  state = {
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    const {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by
    } = this.state;

    const newBeer = {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by
    };
    axios
      .post("https://ih-beer-api.herokuapp.com/beers/new", newBeer)
      .then(response => {
        console.log("Returned Data ", response);
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Problem encounted by Axios post req: ", err);
      });
  };

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
    console.log(this.state);
  };

  render() {
    return (
      <>
        <Header />
        <div className="container">
        <h1>Add a new Beer</h1>
          <form className="new-beer-form" onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <br />
              <input
                type="text"
                id="name"
                name="name"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="tagline">Tagline:</label>
              <br />
              <input
                type="text"
                id="tagline"
                name="tagline"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="description">Description:</label>
              <br />
              <textarea
                id="description"
                name="description"
                rows="4"
                cols="50"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="first_brewed">First brewed:</label>
              <br />
              <input
                type="text"
                id="first_brewed"
                name="first_brewed"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="brewers_tips">Brewer tips:</label>
              <br />
              <input
                type="text"
                id="brewers_tips"
                name="brewers_tips"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="attenuation_level">Attenuation level:</label>
              <br />
              <input
                type="number"
                id="attenuation_level"
                name="attenuation_level"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="contributed_by">Contributed by:</label>
              <br />
              <input
                type="text"
                id="contributed_by"
                name="contributed_by"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <button type="submit">Add New</button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default NewBeer;
