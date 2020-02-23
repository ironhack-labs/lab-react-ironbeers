import React, { Component } from 'react'
import Navbar from './Navbar'
import axios from "axios";

export default class NewBeer extends Component {

    state = {
        msg: "",
        name: "",
        tagline:  "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: "",
        contributed_by: ""
    };

    updateState = e => {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value});
        console.log(e.target.value);
    }

    submitForm = e => {
        e.preventDefault();
        axios
            .post("https://ih-beers-api2.herokuapp.com/beers/new", {
                name: this.state.name,
                tagline: this.state.tagline,
                description: this.state.description,
                first_brewed: this.state.first_brewed,
                brewers_tips: this.state.brewers_tips,
                attenuation_level: this.state.attenuation_level,
                contributed_by: this.state.contributed_by
            })
            .then(apiRes => {
                this.setState({msg: <div className="msg">The beer has been created</div>})
                console.log(apiRes)
            })
            .catch(apiErr =>  {
                this.setState({msg: <div className="msg">Something went wrong</div>})
                console.error(apiErr);
            });
    }

    render() {
        return (
            <div>
                <Navbar/>
                <div className="content-form">
                    <h1>Add a brand new beer !</h1>
                    {this.state.msg && this.state.msg}
                    <form
                        className="form"
                        onSubmit={this.submitForm}
                        onChange={this.updateState}
                    >

                    <label htmlFor="name">Name</label>
                    <input type="text" name="name"/>

                    <label htmlFor="tagline">Tagline</label>
                    <input type="text" name="tagline"/>

                    <label htmlFor="description">Description</label>
                    <textarea type="text" name="description"></textarea>

                    <label htmlFor="first-brewed">First Brewed</label>
                    <input type="text" name="first_brewed"/>

                    <label htmlFor="brewers_tips">Brewers tips</label>
                    <input type="text" name="brewers_tips"/>

                    <label htmlFor="attenuation_level">Attenuation level</label>
                    <input type="number" name="attenuation_level"/>

                    <label htmlFor="contributed_by">Contributed by</label>
                    <input type="text" name="contributed_by"/>

                    <button type="submit" className="btn-create">CREATE</button>
                    </form>
                </div>
            </div>
        )
    }
}
