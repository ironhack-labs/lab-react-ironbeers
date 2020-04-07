import React, { Component } from 'react';
import qs from 'qs';
import axios from 'axios';

class AddBeer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tagline: "",
            description: "",
            first_brewed: "",
            attenuation_level: "",
            brewers_tips: "",
            contributed_by: "",
            name: ""     
        }

        this.changeHandler = this.changeHandler.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    formSubmit(event) {
        event.preventDefault()

        axios({
            method: "POST",
            url: "https://ih-beers-api.herokuapp.com/beers/new",
            data: qs.stringify(this.state),
            headers: {
                "content-type": "application/x-www-form-urlencoded"
            }
        })
        .then((response)=> {
            // you could redirect to the detail page of the beer you just created
            // assuming you're using react router:
            this.props.history.push(`/beers/${response.data._id}`)
        })
        .catch((error)=> {
            console.log(error.response.data)
            // you could update the state to show the error to the user
        });
    }

    changeHandler(event) {
        this.setState({
            [event.target.name]: event.target.value 
        });
    }

    

    render () {
        return (
            <div>
                <form onSubmit={this.formSubmit}>
                    <input type="text" name="tagline" value={this.state.tagline} placeholder="tagline" onChange={this.changeHandler}/>
                    <input type="text" name="description" value={this.state.description} placeholder="description" onChange={this.changeHandler}/>
                    <input type="text" name="first_brewed" value={this.state.first_brewed} placeholder="first_brewed" onChange={this.changeHandler}/>
                    <input type="text" name="attenuation_level" value={this.state.attenuation_level} placeholder="attenuation_level" onChange={this.changeHandler}/>
                    <input type="text" name="brewers_tips" value={this.state.brewers_tips} placeholder="brewers_tips" onChange={this.changeHandler}/>
                    <input type="text" name="contributed_by" value={this.state.contributed_by} placeholder="contributed_by" onChange={this.changeHandler}/>
                    <input type="text" name="name" value={this.state.name} placeholder="name" onChange={this.changeHandler}/>
                    <button type="submit">Submit</button>
                </form>   
            </div>
        )
    }
}

export default AddBeer