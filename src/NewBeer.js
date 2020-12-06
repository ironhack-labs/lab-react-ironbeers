import axios from 'axios'

import React, { Component } from 'react'

export default class NewBeer extends Component {
    state = {
        name:'',
        tagline:'',
        description:'',
        first_brewed:'',

    }

    changeHandler = (event) => {
        const {name, value} = event.target
        this.setState ({[name]: value})
    }

    submitHandler = (event) => {
        event.preventDefault()
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new',this.state )
        .then(response => console.log(response))
    }
    render() {
        return (
            <div>
                <form onSubmit = {this.submitHandler}>
                <label htmlFor = "name">name</label>
                < input  onChange = {this.changeHandler} type = "text" name= "name" />
                <label htmlFor = "tagline">tagline</label>
                < input  onChange = {this.changeHandler} type ="text" name = "tagline" />
                <label htmlFor = "description">description</label>
                < input  onChange = {this.changeHandler} type = "text" name= "description"/>
                <label htmlFor = "first_brewed">first_brewed</label>
                < input  onChange = {this.changeHandler} type = "text" name= "first_brewed"/>
                <label htmlFor = "brewers_tips">brewers_tips</label>
                < input  onChange = {this.changeHandler} type = "text" name= "brewers_tips"/>
                <label htmlFor = "attenuation_Level">attenuation_level</label>
                < input  onChange = {this.changeHandler} type = "number" name= "attenuation_level"/>
                <label htmlFor = "contributed_by">contributed_by</label>
                < input  onChange = {this.changeHandler} type = "text" name= "contributed_by"/>
                <button type = "submit">Submit</button>
                </form>
            </div>
        )
    }
}
