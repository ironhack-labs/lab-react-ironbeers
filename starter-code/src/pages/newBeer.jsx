import React, { Component } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";

export default class newBeer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      tagline: "",
      description: "",
      firstBrewed: "",
      brewerTips: "",
      alluminationLevel: "",
      contributedBy: "",
      message: ""
    };
  }

  onChange = event => {
    // console.log(event.target.name, event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    console.log("onSubmit");
    console.log(event);
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", {
        name: this.state.name,
        tagline: this.state.tagline,
        text: this.state.description,
        first_brewed: this.state.firstBrewed,
        brewer_tips: this.state.brewerTips,
        attenaution_level: this.state.alluminationLevel,
        contributed_by: this.state.contributedBy
      })
      .then(msg => {
        // this.setMessage(msg);
      })
      .catch(err => {
        // this.setMessage(err);
      });
  };

  setMessage = msg => {
    this.setState({
      message: msg
    });
  };

  Message = () => <div className="message">${this.state.message}</div>;

  render() {
    return (
      <div className="container p-5">
        <div className="message">{this.state.message}</div>
        <form onSubmit={this.handleSubmit}>
          <Form.Group controlId="name">
            <label htmlFor="name">Name</label>
            <input
              onChange={this.onChange}
              className="form-control"
              type="text"
              name="name"
              value={this.state.name}
            />
          </Form.Group>
          <Form.Group>
            <label htmlFor="tagline">Tagline</label>
            <input
              onChange={this.onChange}
              className="form-control"
              type="text"
              id="tagline"
              name="tagline"
              value={this.state.tagline}
            />
          </Form.Group>
          <Form.Group>
            <label htmlFor="description">Description</label>
            <input
              onChange={this.onChange}
              className="form-control"
              type="text"
              rows="5"
              name="description"
              id="description"
              value={this.state.description}
            />
          </Form.Group>
          <Form.Group>
            <label htmlFor="first-brewed">First Brewed</label>
            <input
              onChange={this.onChange}
              className="form-control"
              type="text"
              name="firstBrewed"
              id="first-brewed"
              value={this.state.firstBrewed}
            />
          </Form.Group>
          <Form.Group>
            <label htmlFor="brewer-tips">Brewer Tips</label>
            <input
              onChange={this.onChange}
              className="form-control"
              id="brewer-tips"
              type="text"
              name="brewerTips"
              value={this.state.brewerTips}
            />
          </Form.Group>
          <Form.Group>
            <label htmlFor="allumination-level">Allumination Level</label>
            <input
              onChange={this.onChange}
              className="form-control"
              type="text"
              name="alluminationLevel"
              value={this.state.alluminationLevel}
              id="allumination-level"
            />
          </Form.Group>
          <Form.Group>
            <label htmlFor="contributed-by">Contributed By</label>
            <input
              onChange={this.onChange}
              className="form-control"
              id="contributed-by"
              type="text"
              name="contributedBy"
              value={this.state.contributedBy}
            />
          </Form.Group>
          <Form.Group>
            <button type="submit" className="btn btn-primary">
              {" "}
              Create New Bear
            </button>
          </Form.Group>
        </form>
      </div>
    );
  }
}
