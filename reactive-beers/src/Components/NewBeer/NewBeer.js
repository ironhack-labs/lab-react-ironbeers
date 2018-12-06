import React, { Component } from 'react';
import axios from 'axios';


class NewBeer extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            tagline: "",
            description: "",
            first_brewed: "",
            brewers_tips: "",
            attenuation_level: "",
            contributed_by: ""
        }
    }
    addNew(e) {
        e.preventDefault()
        const name = this.state.name;
        const tagline = this.state.tagline;
        const description = this.state.description;
        const first_brewed = this.state.first_brewed;
        const brewers_tips = this.state.brewers_tips;
        const attenuation_level = this.state.attenuation_level;
        const contributed_by = this.state.contributed_by;
        axios.post("https://ironbeer-api.herokuapp.com/beers/new", { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by })
            .then(() => {
                this.setState({
                    name: "",
                    tagline: "",
                    description: "",
                    first_brewed: "",
                    brewers_tips: "",
                    attenuation_level: "",
                    contributed_by: ""
                });
            })
    }

    changeValue(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    render() {
        return (
            <div>
                <form onSubmit={e => this.addNew(e)}>
                    <input placeholder="name" type="text" name="name" value={this.state.name} onChange={e => this.changeValue(e)} />
                    <input placeholder="tagline" type="text" name="tagline" value={this.state.tagline} onChange={e => this.changeValue(e)} />
                    <input placeholder="description" type="textArea" name="description" value={this.state.description} onChange={e => this.changeValue(e)} />
                    <input placeholder="first brewed" type="text" name="first_brewed" value={this.state.first_brewed} onChange={e => this.changeValue(e)} />
                    <input placeholder="brewers tips" type="text" name="brewers_tips" value={this.state.brewers_tips} onChange={e => this.changeValue(e)} />
                    <input placeholder="attenuation level" type="text" name="attenuation_level" value={this.state.attenuation_level} onChange={e => this.changeValue(e)} />
                    <input placeholder="contributed by" type="text" name="contributed_by" value={this.state.contributed_by} onChange={e => this.changeValue(e)} />
                    <button>Add a New Beer</button>
                </form>
            </div>
        );
    }
}

export default NewBeer;