import React, { Component } from 'react';
import axios from 'axios';
import './NewBeer.css';

class NewBeer extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            tagline: '',
            description: '',
            first_brewed: '',
            brewers_tips: '',
            attenuation_level: 0,
            contributed_by: ''
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleNewBeer = () => {
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', this.state)
          .then(response => {
            this.setState({
                name: '',
                tagline: '',
                description: '',
                first_brewed: '',
                brewers_tips: '',
                attenuation_level: 0,
                contributed_by: ''
            });
          })
    }

    render() {
        const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = this.state;

        return (
            <div className='NewBeer'>
                <label className='NewBeer-label' htmlFor='name'>Name</label>
                <input className='NewBeer-input' id='name' name='name' type='text' value={name} onChange={this.handleInput}></input>
                <label className='NewBeer-label' htmlFor='tagline'>Tagline</label>
                <input className='NewBeer-input' id='tagline' name='tagline' type='text' value={tagline} onChange={this.handleInput}></input>
                <label className='NewBeer-label' htmlFor='description'>Description</label>
                <textarea className='NewBeer-description' id='description' name='description' type='text' value={description} onChange={this.handleInput}></textarea>
                <label className='NewBeer-label' htmlFor='first_brewed'>First Brewed</label>
                <input className='NewBeer-input' id='first_brewed' name='first_brewed' type='text' value={first_brewed} onChange={this.handleInput}></input>
                <label className='NewBeer-label' htmlFor='brewers_tips'>Brewers Tips</label>
                <input className='NewBeer-input' id='brewers_tips' name='brewers_tips' type='text' value={brewers_tips} onChange={this.handleInput}></input>
                <label className='NewBeer-label' htmlFor='attenuation_level'>Attenuation Level</label>
                <input className='NewBeer-input' id='attenuation_level' name='attenuation_level' type='number' value={attenuation_level} onChange={this.handleInput}></input>
                <label className='NewBeer-label' htmlFor='contributed_by'>Contributed By</label>
                <input className='NewBeer-input' id='contributed_by' name='contributed_by' type='text' value={contributed_by} onChange={this.handleInput}></input>
                <button className='NewBeer-button' onClick={this.handleNewBeer}>ADD NEW</button>
            </div>
        );
    }
}

export default NewBeer;