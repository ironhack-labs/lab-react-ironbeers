import React, { Component } from 'react'
import axios from "axios";

export default class NewBeer extends Component {
    state = {
        name: "",
        image: "",
        tagline: '',
        description: "",
        brewers_tips: "",
        first_brewed: "",
        attenuation_level: 0,
        contributed_by: ""
    }

    handleTextChange (event) {
        const {name, value} = event.target;
        this.setStete( {
            [name] : value
        })
    }

    handleNumberChange = (event) => {
        const {name, value} = event.target;
        this.setStete()
    }


    // you can use this.state below, as you are updating state first, so instead of writing all imputs separately, you send whole state that is already updated

    handleSubmit = (event) => {
 event.preventDefault();
axios.post('https://ih-beers-api2.herokuapp.com/beers/new', this.state).then((resp) => {
    console.log(resp)
    this.props.history.push("/")
})
}
    

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleTextChange} name="name" value={this.state.name} />
                    <input type="text" onChange={this.handleTextChange} name="image" value={this.state.image} />
                    <input type="text" onChange={this.handleTextChange} name="tagline" value={this.state.tagline}  />
                    <input type="text" onChange={this.handleTextChange} name=" description" value={this.state.description}  />
                    <input type="text" onChange={this.handleTextChange} name="brewers_tips" value={this.state.brewers_tips} />
                    <input type="text" onChange={this.handleTextChange} name="first_brewed" value={this.state.brewers_tips}  />
                    <input type="text" onChange={this.handleTextChange} name="contributed_by" value={this.state.contributed_by}  />

                    <input type="number" onChange={this.handleTextChange} name="attenuation_level" value={this.state.attenuation_level}  />

                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
