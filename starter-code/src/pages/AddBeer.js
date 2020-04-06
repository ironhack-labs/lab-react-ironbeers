import React, { Component } from 'react';
import axios from 'axios';
import qs from 'qs';
import Header from '../components/Header';
// import BeerDetail from './BeerDetail';

class AddBeer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tagline: "",
      description: "",
      first_brewed: "",
      attenuation_level: "",
      brewers_tips: "",
      contributed_by: "",
      name: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    axios({
      method:"POST",
      url:"http://ih-beers-api.herokuapp.com/beers/new",
      data: qs.stringify(this.state),
      headers: {
        "content-type": "application/x-www-form-urlencoded"
      }
    })
    .then((response)=>{
      this.props.history.push(`/beer-detail/${response.data._id}`)
    })
    .catch((err)=> {

    })
  }

  render(){
    return (
      <div>
        <Header />
        <h1>add a new beer to our list</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="tagline"
            value={this.state.tagline}
            onChange={this.handleChange}
            name="tagline"
          />
          <input
            type="text"
            placeholder="description"
            value={this.state.description}
            onChange={this.handleChange}
            name="description"
          />
          <input
            type="text"
            placeholder="first_brewed"
            value={this.state.first_brewed}
            onChange={this.handleChange}
            name="first_brewed"
          />
          <input
            type="text"
            placeholder="attenuation_level"
            value={this.state.attenuation_level}
            onChange={this.handleChange}
            name="attenuation_level"
          />
          <input
            type="text"
            placeholder="brewers_tips"
            value={this.state.brewers_tips}
            onChange={this.handleChange}
            name="brewers_tips"
          />
          <input
            type="text"
            placeholder="contributed_by"
            value={this.state.contributed_by}
            onChange={this.handleChange}
            name="contributed_by"
          />
          <input
            type="text"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
          />
          <button type="submit">Add beer</button>
        </form>
      </div>
    );
  }
}

export default AddBeer