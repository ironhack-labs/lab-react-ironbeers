import React, { Component } from 'react';
import Header from './Header';
import axios from 'axios';

class NewBeer extends Component {
    constructor(){
        super();

        this.state = {
            name: "",
            tagline: "",
            first_brewed: "",
            brewers_tips: "",
            attenuation_level: 0,
            description: "",
            contributed_by: ""
        }
    }

    formName(event){
        this.setState({
            name: event.target.value,
        })
    }

    formTagline(event){
        this.setState({
            tagline: event.target.value,
        })
    }

    formFirstBrewed(event){
        this.setState({
            first_brewed: event.target.value,
        })
    }

    formBrewersTips(event){
        this.setState({
            brewers_tips: event.target.value,
        })
    }

    formAttenuationLevel(event){
        this.setState({
            attenuation_level: event.target.value,
        })
    }

    formDescription(event){
        this.setState({
            description: event.target.value,
        })
    }

    formContributedBy(event){
        this.setState({
            contributed_by: event.target.value,
        })
    }

    sendToApi(event){
        event.preventDefault();
        console.log('sendtoapi');
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', this.state
        ).then(a => {
            console.log(a);
        }).catch((error) => console.error(error));

    }

    render(){
        return(
            <div>
            <Header />
                <form onSubmit = {(e) => { this.sendToApi(e) }}>
                    <label>Name:</label>
                    <input type="text" name="name" onChange={(e) => this.formName(e)}/>
                    <label>Tagline:</label>
                    <input type="text" name="tagline" onChange={(e) => {this.formTagline(e)}}/>
                    <label>First brewed:</label>
                    <input type="text" name="firstBrewed" onChange={(e) => {this.formFirstBrewed(e)}}/>
                    <label>Brewers Tips:</label>
                    <input type="text" name="brewersTips" onChange={(e) => {this.formBrewersTips(e)}}/>
                    <label>Attenuation level:</label>
                    <input type="number" name="attenuationLevel" onChange={(e) => {this.formAttenuationLevel(e)}}/>
                    <label>Description:</label>
                    <input type="text" name="description" onChange={(e) => {this.formDescription(e)}}/>
                    <label>Contributed by:</label>
                    <input type="text" name="contributedBy" onChange={(e) => {this.formContributedBy(e)}}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default NewBeer;
