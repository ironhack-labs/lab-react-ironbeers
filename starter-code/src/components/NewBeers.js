import React, { Component } from 'react';
import axios from 'axios';

class NewBeers extends Component {

    constructor() {
        super()
        this.state = {
        id: "",
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewed_tips: "",
        attenuation_level: "",
        contributed_by: ""
    }

}

    handleEdit = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        });
      }

    handleForm = (e) => {
        e.preventDefault();
        axios
        .post('https://ih-beers-api2.herokuapp.com/beers/new', this.state)
        .then(response => {
        })
        .catch((error) => {
            this.setState({
                error: error,
            })
        })

        this.setState({
            id: "",
            name: "",
            tagline: "",
            description: "",
            first_brewed: "",
            brewed_tips: "",
            attenuation_level: "",
            contributed_by: ""
        });
    }

    render(){
        
            const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = this.state;
            return(
            <div>
                <form onSubmit={this.handleForm}>
                    <input type="text" name="name" value={name} placeholder="name" onChange={this.handledit} />  
                    <input type="text" name="tagline" value={tagline} placeholder="tagline" onChange={this.handledit} />  
                    <input type="text" name="description" value={description} placeholder="description" onChange={this.handledit} />  
                    <input type="text" name="first_brewed" value={first_brewed} placeholder="first_brewed" onChange={this.handledit} />  
                    <input type="text" name="brewers_tips" value={brewers_tips} placeholder="brewers_tips" onChange={this.handledit} />  
                    <input type="text" name="attenuation_level" value={attenuation_level} placeholder="attenuation_level" onChange={this.handledit} />  
                    <input type="text" name="contributed_by" value={contributed_by}placeholder="contributed_by" onChange={this.handledit} />     
                    <button type='submit'>New Beer</button>
                </form>
            </div>
        )
    }
}

export default NewBeers; 