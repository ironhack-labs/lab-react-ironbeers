import axios from 'axios';
import React, { Component } from 'react'

export default class Newbeer extends Component {
    state = {
        name: '',
        tagline: '',
        description: '',
        firstBrewed: '',
        brewerTips: '',
        attenuationLevel: '',
        contributedBy: ''
    }

    changeHandler = event => {
        const { name, value } = event.target;
        this.setState({
            [name] : value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {
            name: this.state.name,
            tagline: this.state.tagline,
            description: this.state.description,
            first_brewed: this.state.firstBrewed,
            brewers_tips: this.state.brewerTips,
            attenuation_level: this.state.attenuationLevel,
            contributed_by: this.state.contributedBy
        })
        .then(this.props.history.push('/'))
        .catch(err => {
            console.log(err)
        })

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} style={{display:"flex", flexDirection:"column", alignItems:"center", padding:"40px"}}>
                    <label htmlFor="">Name</label>
                    <input type="text" name="name" id="name" value={this.state.name} onChange={this.changeHandler}/>
                    <label htmlFor="tagline">Tagline</label>
                    <input type="text" name="tagline" id="tagline" value={this.state.tagline} onChange={this.changeHandler}/>
                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" id="description" value={this.state.description} onChange={this.changeHandler}/>
                    <label htmlFor="firstBrewed">First Brewed</label>
                    <input type="text" name="firstBrewed" id="firstBrewed" value={this.state.firstBrewed} onChange={this.changeHandler}/>
                    <label htmlFor="brewerTips">Brewer Tips</label>
                    <input type="text" name="brewerTips" id="brewerTips" value={this.state.brewerTips} onChange={this.changeHandler}/>
                    <label htmlFor="attenuationLevel">Attenuation Level</label>
                    <input type="number" name="attenuationLevel" id="attenuationLevel" value={this.state.attenuationLevel} onChange={this.changeHandler}/>
                    <label htmlFor="contributedBy">Contributed By</label>
                    <input type="text" name="contributedBy" id="contributedBy" value={this.state.contributedBy} onChange={this.changeHandler}/>
                    <button type="submit">Add New</button>
                </form>
            </div>
        )
    }
}
