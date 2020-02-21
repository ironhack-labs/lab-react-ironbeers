import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import axios from 'axios';

class NewBeer extends Component {

  state = {
    newBeer : {},
    beerAdded : false,
    error : false
  }

  onChange(e) {
    let fieldVal =  e.target.name === 'attenuation_level' ? parseInt(e.target.value) : e.target.value;

    let newBeer = {...this.state.newBeer}
    newBeer[e.target.name] = fieldVal;

    this.setState({ newBeer })
  }

  onSubmit(e) {
    e.preventDefault();
    this.sendDataToAPI(this.state.newBeer);
  }

  sendDataToAPI(payload) {
    axios.post("https://ih-beers-api2.herokuapp.com/beers/new", payload)
    .then((results) => {
      this.setState({ beerAdded : true })
    }).catch((err) => {
      console.log("Error : ", err)
      this.setState({ error : true })
    })
  }

  render() {

    if (!!this.state.error) {
      return (
        <div className="page newbeer">
          <p>Oops... something went wrong !</p>
        </div>
      )
    }

    if (!!this.state.beerAdded) {
      return (<Redirect to='/' />)
    }

    return (
      <div className="page newbeer">
        <form method="post" onChange={(e) => this.onChange(e)} onSubmit={(e) => this.onSubmit(e)}>

          <div className="formEntry">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="name" required />
          </div>

          <div className="formEntry">
            <label htmlFor="tagline">Tagline</label>
            <input id="tagline" type="text" name="tagline" required />
          </div>

          <div className="formEntry">
            <label htmlFor="description">Description</label>
            <input id="description" type="textarea" name="description" required />
          </div>

          <div className="formEntry">
            <label htmlFor="first_brewed">First Brewed</label>
            <input id="first_brewed" type="text" name="first_brewed" required />
          </div>

          <div className="formEntry">
            <label htmlFor="brewers_tips">Brewers Tips</label>
            <input id="brewers_tips" type="text" name="brewers_tips" required />
          </div>

          <div className="formEntry">
            <label htmlFor="attenuation_level">Attenuation Level</label>
            <input id="attenuation_level" type="number" name="attenuation_level" required />
          </div>

          <div className="formEntry">
            <label htmlFor="contributed_by">Contributed By</label>
            <input id="contributed_by" type="text" name="contributed_by" required />
          </div>

          <div className="formEntry submitButton">
            <button type="submit">ADD BEER</button>
          </div>

        </form>
      </div>
    )
  }

}

export default NewBeer;
