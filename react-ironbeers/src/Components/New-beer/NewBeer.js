import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import axios from "axios";


export default class NewBeer extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: 0,
      contributed_by: '',
      redirect:false
    }

  }
  handleFormSubmit = (e) => {
    
    let { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = this.state;
    e.preventDefault();
    axios.post("https://ironbeer-api.herokuapp.com/beers/new", { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by })
      .then(() => {

        this.setState({...this.state,redirect:true})
      })
      .catch(error => console.log(error))

  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    console.log(this.state.redirect)
    return (!this.state.redirect) ? (


      <div>
        <div><Link to={`/`}>Home</Link></div>
        <form onSubmit={this.handleFormSubmit}>
          <input type="text" placeholder="Name" name="name" onChange={e => this.handleChange(e)}></input>
          <br></br>
          <input type="text" placeholder="Tagline" name="tagline" onChange={e => this.handleChange(e)}></input>
          <br></br>
          <input type="text" placeholder="Description" name="description" onChange={e => this.handleChange(e)}></input>
          <br></br>
          <input type="text" placeholder="First Brewed" name="first_brewed" onChange={e => this.handleChange(e)}></input>
          <br></br>
          <input type="text" placeholder="Brewed Tips" name="brewers_tips" onChange={e => this.handleChange(e)}></input>
          <br></br>
          <input type="number" placeholder="Attenuation Level" name="attenuation_level" onChange={e => this.handleChange(e)}></input>
          <br></br>
          <input type="text" placeholder="Contributed By" name="contributed_by" onChange={e => this.handleChange(e)}></input>
          <br></br>
          <button type="submit">ADD NEW</button>
        </form>
      </div>
    ):<Redirect to="/"/>
  }
}
