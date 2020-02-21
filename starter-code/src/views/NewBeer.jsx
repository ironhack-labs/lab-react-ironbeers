import React, { Component } from 'react'
import APIEndpoint from "../api/Handler"

export default class NewBeer extends Component {

    state = {
        name:"",
        tagline:"",
        description:"",
        first_brewed:"",
        brewers_tips:"",
        attenuation_level:"",
        contributed_by:""
    }

    api = new APIEndpoint()

    handleInputs = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.api
            .post('beers/new',this.state)
            .then(dbRes => console.log(dbRes))
            .catch(apiErr => console.error(apiErr));

        this.setState({
            name:"",
            tagline:"",
            description:"",
            first_brewed:"",
            brewers_tips:"",
            attenuation_level:"",
            contributed_by:""
        })
    }

    render() {
        return (
            <form
                id="newBeer"
                className="form"
                onSubmit={this.handleFormSubmit}
            >
                <h1 className="title">Create a New Beer</h1>

                <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleInputs}
                    className="input is-info"
                    placeholder="Name of the beer"
                />

                <input
                    type="text"
                    name="tagline"
                    value={this.state.tagline}
                    onChange={this.handleInputs}
                    className="input is-info"
                    placeholder="Tagline of the beer"
                />

                <textarea
                    name="description"
                    value={this.state.description}
                    onChange={this.handleInputs}
                    className="textarea is-info"
                    placeholder="Add a description ..."
                />

                <input
                    type="text"
                    name="first_brewed"
                    value={this.state.first_brewed}
                    onChange={this.handleInputs}
                    className="input is-info"
                    placeholder="First_brewed information"
                />

                <input
                    type="text"
                    name="brewers_tips"
                    value={this.state.brewers_tips}
                    onChange={this.handleInputs}
                    className="input is-info"
                    placeholder="Brewers tips"
                />

                <input
                    type="number"
                    name="attenuation_level"
                    value={this.state.attenuation_level}
                    onChange={this.handleInputs}
                    className="input is-info"
                    placeholder="Attenuation level"
                />

                <input
                    type="text"
                    name="contributed_by"
                    value={this.state.contributed_by}
                    onChange={this.handleInputs}
                    className="input is-info"
                    placeholder="Name of the contributor"
                />

                <button className="button is-success">Create</button>
                
            </form>
        )
    }
}

