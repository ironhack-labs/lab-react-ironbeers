import React, { Component } from 'react'

export default class NewBeer extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            name:'',
            tagline: '',
            description: '',
            first_brewed: '',
            brewers_tips: '',
            attenuation_level: 0,
            contributed_by: ''
        }
    }

    handleChange(e) {
        let {name, value, type} = e.target
        if (type === 'number') {
            this.setState({
                [name]:parseInt(value)
            })    
        } else {
            this.setState({
                [name]:value
            })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        
        let url = "https://ih-beers-api2.herokuapp.com/beers/new";

        fetch(url, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
    
            body: JSON.stringify(
              this.state
            ),
          })
            .then((response) => response.json())
            .then((responseJson) => {
              //Showing response message coming from server 
              console.warn(responseJson);
            })
            .catch((error) => {
            //display error message
             console.warn(error);
            });
        
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name</label>
                <br/>
                <input type="text" name="name" onChange={this.handleChange}/>
                <br/>
                <label>Tagline</label>
                <br/>
                <input type="text" name="tagline" onChange={this.handleChange}/>
                <br/>
                <label>Description</label>
                <br/>
                <input type="text" name="description" onChange={this.handleChange}/>
                <br/>
                <label>First Brewed</label>
                <br/>
                <input type="text" name="first_brewed" onChange={this.handleChange}/>
                <br/>
                <label>Brewers Tips</label>
                <br/>
                <input type="text" name="brewers_tips" onChange={this.handleChange}/>
                <br/>
                <label>Attenuation Level</label>
                <br/>
                <input type="number" name="attenuation_level" onChange={this.handleChange}/>
                <br/>
                <label>Contributed By</label>
                <br/>
                <input type="text" name="contributed_by" onChange={this.handleChange}/>
                <br/>
                <button>Submit</button>
            </form>
        )
    }
}