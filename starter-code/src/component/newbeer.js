import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';


class NewBeer extends Component {
    constructor(props){
        super(props)
        this.state = {
            name : '',
            tagline : '',
            description : '',
            first_brewed : '',
            attenuation_level : '',
            contribution_by :''
        }
        this.onSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name : this.state.name,
            tagline : this.state.tagline,
            description : this.state.description,
            first_brewed : this.state.first_brewed,
            attenuation_level : this.state.attenuation_level,
            contribution_by : this.state.contribution_by
        }
        console.log(data)
        axios.post('https://ironbeer-api.herokuapp.com/beers/new', data)
        .then(data => {
            console.log(data)
        })
    }


    formSubmit = (e) => {
        const {name, value} = e.target
        this.setState({[name] : value})
    }


    render() {
        return(
            <div>
                <form onSubmit={this.onSubmit} >
                    <input name='name' type='text' placeholder='Enter a name' value={this.state.name} onChange={ (e) => this.formSubmit(e)}></input>
                    <input name="tagline" placeholder="Enter a tagline" type="text" value={this.state.tagline} onChange={ (e) => this.formSubmit(e)} ></input>
                    <input name="description" placeholder="Enter a description" type="text" value={this.state.description} onChange={ (e) => this.formSubmit(e)}></input>
                    <input name="first_brewed" placeholder="Enter when first brewed" type="text" value={this.state.first_brewed} onChange={ (e) => this.formSubmit(e)}></input>
                    <input name="attenuation_level" placeholder="Enter the attenuation_level" type="text" value={this.state.attenuation_level} onChange={ (e) => this.formSubmit(e)}></input>
                    <input name="contribution_by" placeholder="contribution done by" type="text" value={this.state.contribution_by} onChange={ (e) => this.formSubmit(e)}></input>
                    <input value="SUBMIT" type="submit"></input>
                </form>
            </div>
        )
    }
}

export default NewBeer;