import React, { Component } from 'react';
import Header from './Header';
import axios from 'axios';

class NewBeer extends Component {
    state = {
        name: '',
        tagline: '',
        description: '',
        first_brewed:  '',
        brewers_tips:  '',
        attenuation_level:  '',
        contributed_by:  ''
    }

    createNew = (event) => {
        let inputName= event.target.name
        this.setState({
            [inputName]: event.target.value

        })
    }

    sendData = async (event) => {
        event.preventDefault()
        let newBeer = await axios.post ('https://ih-beers-api2.herokuapp.com/beers/new', this.state)
    }


    render() {
        console.log(this.state)
        return (
            <div>
            <Header />

            <form onSubmit={this.sendData} method='POST'>
                <label htmlFor="name">Name:</label>
                <br />
                <input onChange={this.createNew} type="text" id="fname" name="name" placeholder="John"/>
                <br />
                <label htmlFor="lname">Tagline:</label>
                <br />
                <input onChange={this.createNew} type="text" id="lname" name="tagline" placeholder="Doe"/>
                <br />
                <label htmlFor="name">Description</label>
                <br />
                <input onChange={this.createNew} type="text" id="fname" name="description" placeholder="John"/>
                <br />
                <label htmlFor="name">First Brewed</label>
                <br />
                <input onChange={this.createNew} type="text" id="fname" name="first_brewed" placeholder="John"/>
                <br /> 
                <label htmlFor="name">Brewers Tips</label>
                <br />
                <input onChange={this.createNew} type="text" id="fname" name="brewer_tips" placeholder="John"/>
                <br />
                <label htmlFor="name">Attenuation Level</label>
                <br />
                <input onChange={this.createNew} type="number" id="fname" name="attenuation_level" placeholder="John"/>
                <br />
                <label htmlFor="name">Contributed By</label>
                <br />
                <input onChange={this.createNew} type="text" id="fname" name="contributed_by" placeholder="John"/>
                <br />
                <input onChange={this.createNew} type="submit" value="Submit"/>
            </form> 

            </div>
        );
    }
}

export default NewBeer;