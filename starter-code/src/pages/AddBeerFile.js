import React, { Component } from 'react';
import axios from 'axios';
import Nav from '../components/Nav';
import './AddBeerFile.css'

export default class AdBeerFile extends Component {
 
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {
    error:""
  }

  handleSubmit(e) {
    e.preventDefault();

    var formData = new FormData(this.formRef.current);

    axios({
      url: 'https://ih-beers-api.herokuapp.com/beers/new',
      data: formData,
      headers: {
        'content-type': 'multipart/form-data'
      },
      method: "POST"
    })
      .then((response) => {
        this.props.history.push(`/beer-detail/${response.data._id}`);
      })
      .catch((error) => {
        this.setState({error: error.response.data.message})
      });
  }

  render() {
    return (
      <div className="add-beer-file">
        <Nav />
        <h3>Add a new beer to our list</h3>
        <form onSubmit={this.handleSubmit} ref={this.formRef}>
          <input
            type="text"
            placeholder="tagline"
            name="tagline"
          />
          <input
            type="text"
            placeholder="description"
            name="description"
          />
          <input
            type="text"
            placeholder="first_brewed"
            name="first_brewed"
          />
          <input
            type="text"
            placeholder="attenuation_level"
            name="attenuation_level"
          />
          <input
            type="text"
            placeholder="brewers_tips"
            name="brewers_tips"
          />
          <input
            type="text"
            placeholder="contributed_by"
            name="contributed_by"
          />
          <input
            type="text"
            placeholder="name"
            name="name"
          />
          <label className="custom-file-upload">
            <input type="file" name="picture"/>
          </label>
          <button type="submit">Add beer</button>
        </form>
      </div>
    );
  }
}
