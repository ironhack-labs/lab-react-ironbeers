import React, { Component } from 'react'
import Navbar from "./Navbar";
import  { Redirect } from 'react-router-dom'
import axios from 'axios';


export class NewBeers extends Component {

  constructor() {
    super();
    this.state = {
      redirect: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit = e => {
    e.preventDefault();
   const name= e.target.name.value;
   const description= e.target.description.value;
   const tagline= e.target.tagline.value;
   const first_brewed= e.target.first_brewed.value;
   const tips= e.target.brewers_tips.value;
   const attenuation_level= e.target.attenuation_level.value;
   const contributed_by= e.target.contributed_by.value;
    axios({
      method: 'post',
      url: 'https://ih-beers-api2.herokuapp.com/beers/new',
      data: {
       name, description, tagline, first_brewed, tips, attenuation_level, contributed_by
      }
    }).then(() => {
      this.setState({ redirect: true })
      console.log('I added!')
    }).catch(err => console.log(err))
  };

  render() {
    const redirect = this.state.redirect;

    if (redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div>
<Navbar />
        <form onSubmit={this.handleSubmit} className='form-group'>
        <label htmlFor="name">Name</label><input type="text" name='name' className="form-control"/>
        <label htmlFor="tagline">Tagline</label><input type="text" name='tagline' className="form-control"/>
       <label htmlFor="description">Description</label> <input type="text" name='description' className="form-control"/>
        <label htmlFor="first_brewed">First brewed</label><input type="text" name='first_brewed' className="form-control"/>
        <label htmlFor="brewers_tips">Tips</label><input type="text" name='brewers_tips' className="form-control"/>
        <label htmlFor="attenuation_level">Attenuation Level</label><input type="number" name='attenuation_level' className="form-control"/>
        <label htmlFor="contributed_by">Created By</label><input type="text" name='contributed_by' className="form-control"/>
        <button className="btn btn-primary m-3 text-center">Add Beer!</button>
        </form>
      </div>
    )
  }
}

export default NewBeers
