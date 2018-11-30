import React, { Component } from "react";
import axios from 'axios'; 
import Nav from "../Nav/Nav";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: "",
        contributed_by: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const base_url = "https://ironbeer-api.herokuapp.com/beers";
    const { form } = this.state;
    axios.post(`${base_url}/new`, form)
      .then(res => {
        const { form } = res.config.data;
        alert(res.data.message);
        this.setState({ form });
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleChange = (e) => {
    const {form} =this.state;
    let field = e.target.name;
    form[field] = e.target.value;
    this.setState({form})
    console.log(form)
  }
  render() {
    return (
      <div>
        <Nav />
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Name</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              name="name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Tagline</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              name="tagline"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Description</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              name="description"
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">First Brewed</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              name="first_brewed"
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Brewers Tips</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              name="brewers_tips"
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Attenuation Level</label>
            <input
              type="number"
              className="form-control"
              id="formGroupExampleInput2"
              name="attenuation_level"
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Contributed By</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              name="contributed_by"
            />
          </div>
          <button type="submit" className="btn btn-primary mb-2">Add New</button>
        </form>
      </div>
    );
  }
}

export default Form;
