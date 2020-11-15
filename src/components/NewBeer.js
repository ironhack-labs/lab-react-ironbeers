import React, { Component } from 'react'
import Navbar from './Navbar';

class NewBeer extends Component {
    state = {
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: ""
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const {name, tagline, description, first_brewed, brewers_tips, attenuation_level} = this.state


        this.props.addTheBeer(this.state);

        this.setState({
            name: "",
            tagline: "",
            description: "",
            first_brewed: "",
            brewers_tips: "",
            attenuation_level: ""
        })
    };

    handleChange = (event) => {
        let {name, value} = event.target
        this.setState({[name]: value})
    };

    render(){
    return (
        <div>
            <Navbar />
            <div className="formulario">
            <form onSubmit={(e) => this.handleFormSubmit(e)}>
                <label htmlFor=""> Name: </label> <br/>
                <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />
                <br/>
                <label htmlFor=""> Tagline: </label> <br/>
                <input type="text" name="tagline" value={this.state.tagline} onChange={(e) => this.handleChange(e)} />
                <br/>
                <label htmlFor=""> Description: </label><br/>
                <textarea type="text" name="description" rows="7" value={this.state.description} onChange={(e) => this.handleChange(e)} />
                <br/>
                <label htmlFor=""> First_brewed: </label><br/>
                <input type="text" name="first_brewed" value={this.state.first_brewed} onChange={(e) => this.handleChange(e)} />
                <br/>
                <label htmlFor=""> Brewers_tips: </label> <br/>
                <input type="text" name="brewers_tips" value={this.state.brewers_tips} onChange={(e) => this.handleChange(e)} />
                <br/>
                <label htmlFor=""> Attenuation_level: </label> <br/>
                <input type="number" name="attenuation_level" value={this.state.attenuation_level} onChange={(e) => this.handleChange(e)} />
                <br/>
                <input type="submit" className="submit" value="Submit" />
            </form>
            </div>
        </div>
    )
    }
}

export default NewBeer
