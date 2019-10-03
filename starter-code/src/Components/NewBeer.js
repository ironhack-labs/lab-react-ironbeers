import React, { Component } from "react";
import axios from "axios";
import Header from "./Header";
import { Link } from "react-router-dom";

export default class NewBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      tagline: "",
      description: "",
      contributed_by: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const name = this.state.name;
    const tagline = this.state.tagline;
    const description = this.state.description;
    const contributed_by = this.state.contributed_by;
    axios
      .post("http://localhost:5000/new", {
        name,
        tagline,
        description,
        contributed_by
      })
      .then(() => {
        this.setState({
          name: "",
          tagline: "",
          description: "",
          contributed_by: ""
        });
      })
      .catch(error => console.log(error));
     
  };

  handleForm = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <Header></Header>
        <h3>Add Beer</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder=""
            value={this.state.name}
            onChange={e => this.handleForm(e)}
          />
          <label>Tagline:</label>
          <textarea
            name="tagline"
            placeholder=""
            value={this.state.tagline}
            onChange={e => this.handleForm(e)}
          />
          <label>Description</label>
          <input
            type="text"
            name="description"
            placeholder=""
            value={this.state.description}
            onChange={e => this.handleForm(e)}
          />

          <label>Contributed by</label>
          <input
            type="text"
            name="contributed_by"
            placeholder=""
            value={this.state.contributed_by}
            onChange={e => this.handleForm(e)}
          />
          <input type="submit" value="Submit" />
        </form >
        <Link to={"/beers"}>All beers</Link>
      </div>
    );
  }
}
