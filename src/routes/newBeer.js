import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import beerService from '../services/beerService';


export default class NewBeer extends React.Component {
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
        this.beerService = new beerService();
    }
    handlerChange = e => {
        let inputName = e.target.name;
        let inputValue = e.target.value;
        this.setState({ ...this.state, [inputName]: inputValue })
    }
    handlerSubmit = e => {
        e.preventDefault();
        let { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = this.state;
        this.beerService.newBeer({ name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by })
            .then(() => this.setState({ ...this.state, name: '', tagline: '', description: '', brewers_tips: '', first_brewed: '', attenuation_level: '', contributed_by: '' }))
    }
    render() {
        return (
            <div className="container">
                < NavBar />
                <form className="add-beer-form" onSubmit={e => this.handlerSubmit(e)}>
                    <input type="text" placeholder="Name" value={this.state.name} name="name" onChange={e => this.handlerChange(e)} />
                    <input type="text" placeholder="Tagline" value={this.state.tagline} name="tagline" onChange={e => this.handlerChange(e)} />
                    <input type="text-area" placeholder="Description" value={this.state.description} name="description" onChange={e => this.handlerChange(e)} />
                    <input type="text" placeholder="First Brewed" value={this.state.first_brewed} name="first_brewed" onChange={e => this.handlerChange(e)} />
                    <input type="text" placeholder="Brewers Tips" value={this.state.brewers_tips} name="brewers_tips" onChange={e => this.handlerChange(e)} />
                    <input type="number" placeholder="Attenuantion Level" value={this.state.attenuation_level} name="attenuation_level" onChange={e => this.handlerChange(e)} />
                    <input type="text" placeholder="Contributed By" value={this.state.contributed_by} name="contributed_by" onChange={e => this.handlerChange(e)} />
                    <button type="submit">ADD NEW</button>
                </form>
            </div>
        )
    }
}
