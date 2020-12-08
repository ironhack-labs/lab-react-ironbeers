import React, { Component } from 'react'
import axios from 'axios';


export default class NewBeer extends Component {
    state = {
        name: "",
        image: "",
        tagline: "",
        description: "",
        brewers_tips: "",
        first_brewed: "",
        attenuation_level: 0,
        contributed_by: "",
    }

    handleTextChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', this.state).then((response) => {
            console.log(response);
            this.props.history.push('/')
        });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name='name' value={this.state.name} type="text" onChange={this.handleTextChange} />
                    <input name='tagline' value={this.state.tagline} type="text" onChange={this.handleTextChange} />
                    <input name='description' value={this.state.description} type="text" onChange={this.handleTextChange} />
                    <input name='brewers_tips' value={this.state.brewers_tips} type="text" onChange={this.handleTextChange} />
                    <input name='first_brewed' value={this.state.first_brewed} type="text" onChange={this.handleTextChange} />
                    <input name='contributed_by' value={this.state.contributed_by} type="text" onChange={this.handleTextChange} />
                    <input name='attenuation_level' value={this.state.attenuation_level} type="number" onChange={this.handleTextChange} />
                    <button type='submit'> SUBMIT YOUR FORM</button>
                </form>
            </div>
        )
    }
}
