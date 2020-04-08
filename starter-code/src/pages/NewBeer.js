import React, { Component } from 'react'
// import {Link} from 'react-router-dom';
import axios from 'axios'
import qs from "qs";
import Navbar from '../components/Navbar'

class NewBeer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tagline: '',
            description: '',
            first_brewed: '',
            attenuation_level: '',
            brewers_tips: '',
            contributed_by: '',
            name: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        axios({
            method: "POST",
            url: "https://ih-beers-api.herokuapp.com/beers/new",
            data: qs.stringify(this.state),
            headers: {
                "content-type": "application/x-www-form-urlencoded"
            }
        })
        .then((response)=> {
            console.log(response)
            // you could redirect to the detail page of the beer you just created
            // assuming you're using react router:
            this.props.history.push(`/beer/detail/${response.data._id}`)
        })
        .catch((error)=> {
            console.log(error.response.data)
            // you could update the state to show the error to the user
        })
    }
    render() {
        return (
            <div>
            <Navbar />
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="tagline" placeholder='tagline' value={this.state.tagline} onChange={this.handleChange}/>
                    <input type="text" name="description" placeholder='description' value={this.state.description} onChange={this.handleChange}/>
                    <input type="text" name="first_brewed" placeholder='first_brewed' value={this.state.first_brewed} onChange={this.handleChange}/>
                    <input type="number" name="attenuation_level" placeholder='attenuation_level' value={this.state.attenuation_level} onChange={this.handleChange}/>
                    <input type="text" name="brewers_tips" placeholder='brewers_tips' value={this.state.brewers_tips} onChange={this.handleChange}/>
                    <input type="text" name="contributed_by" placeholder='contributed_by' value={this.state.contributed_by} onChange={this.handleChange}/>
                    <input type="text" name="name" placeholder='name' value={this.state.name} onChange={this.handleChange}/>
                    <button type="submit">Addbeer</button>
                </form>
            </div>
        )
    }
}

export default NewBeer