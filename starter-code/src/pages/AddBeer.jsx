import React from "react";
import axios from "axios";
import qs from "qs";

import Navbar from "../components/Navbar";
import "../styling/AddBeer.css";

class AddBeer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      attenuation_level: 0,
      brewers_tips: "",
      contributed_by: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    axios({
      method: "POST",
      url: "https://ih-beers-api.herokuapp.com/beers/new",
      data: qs.stringify(this.state),
      headers: {
        "content-type": "application/x-www-form-urlencoded"
      }
    })
      .then((response) => {
        console.log(response)
        this.props.history.push(`/beers/${response.data._id}`)
      })
      .catch((error) => {
        console.log(error.response.data)
      })
  }

  handleChange(event) {
    console.log(event)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div className="add-beer">
        <Navbar />
        <h2>Add a new beer</h2>
        <form onSubmit={this.handleSubmit}>
          <div class="form-group">
            <label for="name">Name:</label>
            <input
              className="form-control"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              name="name"
            />
          </div>
          <div class="form-group">
            <label>Tagline:</label>
            <input
              className="form-control"
              type="text"
              value={this.state.tagline}
              onChange={this.handleChange}
              name="tagline"
            />
          </div>
          <div class="form-group">
            <label>Description:</label>
            <input
              className="form-control"
              type="text"
              value={this.state.description}
              onChange={this.handleChange}
              name="description"
            />
          </div>
          <div class="form-group">
            <label>First brewed:</label>
            <input
              className="form-control"
              type="text"
              value={this.state.first_brewed}
              onChange={this.handleChange}
              name="first_brewed"
            />
          </div>
          <div class="form-group">
            <label>Attenuation level:</label>
            <input
              className="form-control"
              type="number"
              value={this.state.attenuation_level}
              onChange={this.handleChange}
              name="attenuation_level"
            />
          </div>
          <div class="form-group">
            <label>Brewers tips:</label>
            <input
              className="form-control"
              type="text"
              value={this.state.brewers_tips}
              onChange={this.handleChange}
              name="brewers_tips"
            />
          </div>
          <div class="form-group">
            <label>Created by:</label>
            <input
              className="form-control"
              type="text"
              value={this.state.contributed_by}
              onChange={this.handleChange}
              name="contributed_by"
            />
          </div>

          <button type="submit" className="btn btn-warning">Add new beer</button>
        </form>

      </div>
    );
  }
}

export default AddBeer;
