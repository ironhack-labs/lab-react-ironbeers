import React, { Component } from 'react';
import axios from 'axios';



class AddBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      tagline: "",
      image_url: "",
      contributed_by: ""
    }
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const name = this.state.name;
    const tagline = this.state.tagline;
    const image_url = this.state.image_url;
    const contributed_by = this.state.contributed_by;

    axios.post("http://localhost:5000/new", { name, tagline, image_url, contributed_by })
      .then((info) => {
        console.log(info)
        // this.props.getData();
        this.setState({
          name: "",
          tagline: "",
          image_url: "",
          contributed_by: ""
        });
      })
      .catch(error => console.log(error))
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>name:</label>
          <input type="text" name="name" value={this.state.name} onChange={e => this.handleChange(e)} />
          <label>tagline:</label>
          <textarea name="tagline" value={this.state.tagline} onChange={e => this.handleChange(e)} />

          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }

}




export default AddBeer;