import React, { Component } from 'react'
import HeaderToHome from '../components/HeaderToHome'
import axios from "axios"


export default class NewBeer extends Component {

    state = {
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: "",
      };


      updateState = event => {
        this.setState({[event.target.name]: event.target.value});
      }

      submitForm = event => {
        event.preventDefault();

        axios
        .post("https://ih-beers-api2.herokuapp.com/beers/new", this.state)
        .then(res => console.log(res))
        .catch(err => console.log(err))
      }

    render() {
        return (
            <div>
                <HeaderToHome />

                <form className="form" onChange={this.updateState} onSubmit={this.submitForm}>

                <label className="label" htmlFor="name">Name</label>
                <input className="input" id="name" name="name" type="text" />

                <label className="label" htmlFor="tagline">Tagline</label>
                <input className="input" id="tagline" name="tagline" type="text" />

                <label className="label" htmlFor="description">Description</label>
                <textarea className="textarea" id="description" name="description" rows="10" />

                <label className="label" htmlFor="firstbrewed">First Brewed</label>
                <input className="input" id="firstbrewed" name="first_brewed" type="text" />

                <label className="label" htmlFor="tips">Brewers Tips</label>
                <input className="input" id="tips" name="brewers_tips" type="text" />

                <label className="label" htmlFor="attenuation">Attenuation Level</label>
                <input className="input" id="attenuation" name="attenuation_level" type="number" />

                <label className="label" htmlFor="contributed">Contributed By</label>
                <input className="input" id="contributed" name="contributed_by" type="text" />

                <button className="btn">ADD NEW</button>

                </form>
               
            </div>
        )
    }
}