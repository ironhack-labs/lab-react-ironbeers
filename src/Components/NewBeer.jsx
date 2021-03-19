import React, { Component } from 'react'
import Navbar from './Navbar';
import axios from 'axios';

export class NewBeer extends Component {

    state = {
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        abv: 0,
        contributed_by: "",
    }


    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({[name]: value})
    }

    handleAxiosPost = () => {

    }


    handleOnSubmit = (event) => {
        event.preventDefault();
        const newBeer = {
            name: this.state.name,
            tagline: this.state.tagline,
            description: this.state.description,
            first_brewed: this.state.first_brewed,
            brewers_tips: this.state.brewers_tips,
            attenuation_level: Number(this.state.attenuation_level),
            abv: Number(this.state.abv),
            contributed_by: this.state.contributed_by,
        
        }
        
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
        .then((response) => {
            this.setState({
                name: "",
                tagline: "",
                description: "",
                first_brewed: "",
                brewers_tips: "",
                attenuation_level: 0,
                abv: 0,
                contributed_by: "",
            })

            this.props.history.push("/beer")
        })
        .catch(err => {
            console.log(err);
        })

        console.log(newBeer)

    }




    render() {

        return (
            <div>
                <Navbar />
            <form className="form" onSubmit={this.handleOnSubmit}>
                <label className="form__label" htmlFor="name">Name</label>
                <input className="form__input" onChange={this.handleChange} value={this.state.name} type="text" name="name" id="name"/>

                <label className="form__label" htmlFor="tagline">Tagline</label>
                <input className="form__input" onChange={this.handleChange}  value={this.state.tagline} type="text" name="tagline" id="tagline"/>

                <label className="form__label" htmlFor="description">Description</label>
                <input className="form__input" onChange={this.handleChange}  value={this.state.description} type="text" name="description" id="description"/>

                <label className="form__label" htmlFor="first_brewed">First brewed</label>
                <input className="form__input" onChange={this.handleChange}  value={this.state.first_brewed} type="text" name="first_brewed" id="first_brewed"/>

                <label className="form__label" htmlFor="brewers_tips">Brewer tips</label>
                <input className="form__input" onChange={this.handleChange}  value={this.state.brewers_tips} type="text" name="brewers_tips" id="brewers_tips"/>

                <label className="form__label" htmlFor="abv">ABV</label>
                <input className="form__input" onChange={this.handleChange}  value={this.state.abv} type="number" name="abv" id="abv"/>

                <label className="form__label" htmlFor="attenuation_level">Attenuation level</label>
                <input className="form__input" onChange={this.handleChange}  value={this.state.attenuation_level} type="number" name="attenuation_level" id="attenuation_level"/>

                <label className="form__label" htmlFor="contributed_by">Contributed by</label>
                <input className="form__input" onChange={this.handleChange}  value={this.state.contributed_by} type="text" name="contributed_by" id="contributed_by"/>

                <button className="form__button">ADD NEW</button>
            </form>
                
            </div>
        )
    }
}

export default NewBeer
