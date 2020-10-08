import NavMain from '../Components/NavMain';
import React, { Component } from 'react';
import beersApi from '../api/beersApi';

export default class NewBeer extends Component {

  state = {
  name: "",
  tagline: "",
  description: "",
  first_brewed: "",
  brewers_tips: "",
  attenuation_level: "",
  contributed_by: ""
  };

handleChange = (event) => {

  
  const value = event.target.value
  const name = event.target.name

  this.setState({
      [name]: value,
    });

  console.log(value, name)
}

handleSubmit = (event) => {
    event.preventDefault();
    console.log("yaw dawg")
  beersApi.createOne(this.state)
  };


  render () {
    return (
      <div>
      <form onSubmit={this.handleSubmit} method="post">
  <div>
    <label >Name</label>
    <input name="name" onChange={this.handleChange} type="text"></input>
  </div>
  <div>
    <label >Tagline</label>
    <input name="tagline" onChange={this.handleChange} type="text"></input>
  </div>

  <div>
    <label >Description</label>
    <input name="description" onChange={this.handleChange} type="text"></input>
  </div>

  <div>
    <label >First Brewed</label>
    <input name="first_brewed" onChange={this.handleChange} type="text"></input>
  </div>

  <div>
    <label >Brewer tips</label>
    <input name="brewers_tips" onChange={this.handleChange} type="text"></input>
  </div>

  <div>
    <label >Attenuation level</label>
    <input name="attenuation_level" onChange={this.handleChange} type="number"></input>
  </div>

  <div>
    <label >Contributed</label>
    <input name="contributed_by" onChange={this.handleChange} type="text"></input>
  </div>
  <button> Create!</button>
  </form>
</div>
);
}
}
