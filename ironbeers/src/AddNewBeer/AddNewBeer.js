import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class AddNewBeer extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", tagline: "", image_url: "", contributed_by: "" };
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const name = this.state.name;
    const tagline = this.state.tagline;
    const image_url = this.state.image_url;
    const contributed_by = this.state.contributed_by;

    axios
      .post("http://localhost:5000/new", {
        name,
        tagline,
        image_url,
        contributed_by
      })
      .then(() => {
        this.props.getData();
        this.setState({
          name: "",
          tagline: "",
          image_url: "",
          contributed_by: ""
        });
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="container">
        <Link to="/">Home</Link>
        <form className="form" onSubmit={this.handleFormSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={e => this.handleChange(e)}
          />
          <label>Tag Line:</label>
          <textarea
            name="tagline"
            value={this.state.tagline}
            onChange={e => this.handleChange(e)}
          />
          <label>image_url:</label>
          <input
            type="text"
            name="image_url"
            value={this.state.image_url}
            onChange={e => this.handleChange(e)}
          />
          <label>contributed_by:</label>
          <input
            type="text"
            name="contributed_by"
            value={this.state.contributed_by}
            onChange={e => this.handleChange(e)}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddNewBeer;
