import React from 'react';
import Navbar from './Navbar';
import axios from "axios";

class NewBeer extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      tagline: "",
      contributed_by: "",
      image_url: ""
    }
  }

  onNewBeerChange(e, key) {
    this.setState({
      ...this.state,
      [key]: e.target.value
    })
  }

  addNewBeer() {
    axios
      .post("http://localhost:5000/new", this.state)
      .then(newBeer => {
        this.setState({
          ...this.state,
          name: "",
          tagline: "",
          contributed_by: "",
          image_url: ""
        })
      })
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <form>
          <h1>Add a new beer</h1>
          <label>Name:</label>
          <input
            type="text"
            placeholder="Add a new name"
            value={this.state.name}
            onChange={(e) => this.onNewBeerChange(e, "name")} />
          <label>Tagline:</label>
          <input
            type="text"
            value={this.state.tagline}
            onChange={(e) => this.onNewBeerChange(e, "tagline")} />
          <label>Contributed by:</label>
          <input
            type="text"
            value={this.state.contributed_by}
            onChange={(e) => this.onNewBeerChange(e, "contributed_by")} />
          <label>Upload an image:</label>
          <input
            type="text"
            value={this.state.image_url}
            onChange={(e) => this.onNewBeerChange(e, "image_url")} />
          <input
            type="button"
            value="Add new beer"
            onClick={() => this.addNewBeer()} />
        </form>
      </React.Fragment>
    )
  }
}

export default NewBeer;