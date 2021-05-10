import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class NewBeer extends React.Component {

    state= {
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewer_tips: '',
        attenuation_level: 0,
        contributed_by: ''
    }

    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(value, name)
        this.setState({
            [name]: value,
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        const {name, tagline, description, first_brewed, brewer_tips, attenuation_level, contributed_by} = this.state;
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {
            name, 
            tagline, 
            description, 
            first_brewed, 
            brewer_tips, 
            attenuation_level, 
            contributed_by
        })
        .then(response => {
            this.setState({
                name: '',
                tagline: '',
                description: '',
                first_brewed: '',
                brewer_tips: '',
                attenuation_level: 0,
                contributed_by: ''
            })
            console.log(response, "New beer successfully saved to database!")
        })
        .catch(err => {
            
            console.log(err)
        })
    }

    render() {

        console.log(this.state)
        return (


            <div>
                <header><Link to="/">Home</Link></header>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange}/>
                
                        <label htmlFor="text">tagline:</label>
                        <input type="text" name="tagline" value={this.state.tagline} onChange={this.handleChange}/>
                
                        <label htmlFor="description">description:</label>
                        <input type="checkbox" name="description" checked={this.state.description} onChange={this.handleChange}/>
                        
                        <label htmlFor="first_brewed">First brewed</label>
                        <input type="text" name="first_brewed" value={this.state.first_brewed} onChange={this.handleChange}/>
                        
                        <label htmlFor="attenuation_level">First brewed</label>
                        <input type="number" name="attenuation_level" value={this.state.attenuation_level} onChange={this.handleChange}/>

                        <label htmlFor="contributed_by">Contributed by</label>
                        <input type="number" name="contributed_by" value={this.state.contributed_by} onChange={this.handleChange}/>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}
