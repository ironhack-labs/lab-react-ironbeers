import React, { Component } from 'react'
import Nav from './Header';
import axios from 'axios';

export default class NewBeer extends Component {
    state = {
            name: '',
            tagline: '',
            description: '',
            first_brewed: '',
            brewers_tips: '',
            attenuation_level: '',
            contributed_by: ''
    }
    postBeer = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new',this.state)
            .then( (data) => console.log(data))
            .catch( (err) => console.log(err));
    }
    handleChange(event) {
        event.preventDefault();
        // All our inputs have same `name` as the `state` property name.
        let { name, value } = event.target;
    
        this.setState( { [name]: value } );
      }
    render() {
        return (
            <div>
                <Nav />
                <div>
                    <form className='addbeerform'>
                        <label>Name</label>
                        <input 
                        type = 'text' 
                        name = 'name' 
                        value = {this.state.name}
                        onChange = {(e) => this.handleChange(e)}
                        ></input>

                        <label>Tagline</label>
                        <input 
                        type = 'text' 
                        name = 'tagline' 
                        value = {this.state.tagline}
                        onChange = {(e) => this.handleChange(e)}
                        ></input>

                        <label>Description</label>
                        <textarea 
                        type = 'text' 
                        name = 'description' 
                        value = {this.state.description}
                        onChange = {(e) => this.handleChange(e)}>
                        </textarea>

                        <label>First Brewed</label>
                        <input 
                        type = 'text' 
                        name = 'first_brewed' 
                        value = {this.state.first_brewed}
                        onChange = {(e) => this.handleChange(e)}
                        ></input>

                        <label>Brewers Tips</label>
                        <input 
                        type = 'text' 
                        name = 'brewers_tips' 
                        value = {this.state.brewers_tips}
                        onChange = {(e) => this.handleChange(e)}
                        ></input>

                        <label>Attenuation Level</label>
                        <input 
                        type = 'number' 
                        name = 'attenuation_level' 
                        value = {this.state.attenuation_level}
                        onChange = {(e) => this.handleChange(e)}
                        ></input>

                        <label>Contributed By</label>
                        <input 
                        type = 'text' 
                        name = 'contributed_by' 
                        value = {this.state.contributed_by}
                        onChange = {(e) => this.handleChange(e)}
                        ></input>

                        <button onClick = {this.postBeer}>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}
