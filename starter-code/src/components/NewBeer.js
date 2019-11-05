import React, { Component } from "react";
import Nav from "./Nav";
import axios from "axios";

class NewBeer extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      tagline: "",
      description: "",
      firstBrewed: 0,
      brewersTips: "",
      attenuationLevel: "",
      contributedBy: ""
    };
  }

  handleFormSubmit = () => {
    e.preventDefault();

    axios.post("", this.state).then(res => {
      console.log(res.data);
    });

    this.setState({
      name: ""
    });
  };

  handleChange(e) {
    let { name, value } = e.target; //this is targeting props from the form below

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <Nav />
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label for="exampleFormControlInput1">Name</label>
            <input
              name="name"
              type="email"
              value={this.state.name}
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Beer Name"
              onChange={e => this.handleChange(e)}
            />
          </div>

          <div className="form-group">
            <label for="exampleFormControlInput1">Tagline</label>
            <input
              name="tagline"
              value={this.state.tagline}
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Tagline"
              onChange={e => this.handleChange(e)}
            />
          </div>

          <div className="form-group">
            <label for="exampleFormControlTextarea1">Description</label>
            <textarea
              className="form-control"
              name="description"
              value={this.state.description}
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Enter something spicey"
              onChange={e => this.handleChange(e)}
            ></textarea>
          </div>

          <div className="form-group">
            <label for="exampleFormControlInput1">First Brewed</label>
            <input
              type="email"
              value={this.state.firstBrewed}
              name="firstBrewed"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder=""
              onChange={e => this.handleChange(e)}
            />
          </div>

          <div className="form-group">
            <label for="exampleFormControlInput1">Brewers Tips</label>
            <input
              type="email"
              value={this.state.brewersTips}
              name="brewersTips"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder=""
              onChange={e => this.handleChange(e)}
            />
          </div>

          <div className="form-group">
            <label for="exampleFormControlInput1">Attenuation Level</label>
            <input
              type="number"
              value={this.state.attenuationLevel}
              name="attentuationLevel"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder=""
              onChange={e => this.handleChange(e)}
            />
          </div>

          <div className="form-group">
            <label for="exampleFormControlInput1">Contributed by</label>
            <input
              type="email"
              value={this.state.contributedBy}
              name="contributedBy"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder=""
              onChange={e => this.handleChange(e)}
            />
          </div>

          <button value="submit" type="submit" class="btn btn-primary">
            ADD NEW BEER
          </button>
        </form>
      </div>
    );
  }
}

export default NewBeer;
