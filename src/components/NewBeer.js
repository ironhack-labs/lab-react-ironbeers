import axios from 'axios';
import React, { Component } from 'react'
import Navbar from '../components/Navbar'

export default class NewBeer extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            tagline:'',
            description:'',
            firstBrewed:'',
            brewersTips:'',
            attenuationLevel:null,
            contributedBy:''
        }
    }

    handleSubmit=event=>{
        event.preventDefault();
        const { name, tagline, description, firstBrewed, brewersTips, attenuationLevel, contributedBy }= this.state;
        let body = {
            name:name,
            tagline:tagline,
            description:description,
            first_brewed:firstBrewed,
            brewers_tips:brewersTips,
            attenuation_level:attenuationLevel,
            contributed_by:contributedBy
        }
        
        axios({
            method: 'post',
            url: 'https://ih-beers-api2.herokuapp.com/beers/new',
            data: body
        })
        .then(res=>console.log(res))
        .catch(err=>console.log(err))

    }

    handleChange=event=>{
        const value=event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div >
                <Navbar/>
                <div className="new-beer-form">
                <form onSubmit={this.handleSubmit} className="form-group">
                    <label htmlFor="">Name</label>
                    <input onChange={this.handleChange} name="name" type="text" value={this.state.name} className="form-control"/><br/>
                    <label htmlFor="">Tagline</label>
                    <input onChange={this.handleChange} name="tagline" type="text" value={this.state.tagline} className="form-control"/><br/>
                    <label htmlFor="">Description</label>
                    <textarea onChange={this.handleChange} name="description" value={this.state.description} className="form-control" id="" cols="30" rows="10"></textarea><br/>
                    <label htmlFor="">First Brewed</label>
                    <input onChange={this.handleChange} name="firstBrewed" value={this.state.firstBrewed} className="form-control" type="text"/><br/>
                    <label htmlFor="">Brewers Tips</label>
                    <input onChange={this.handleChange} name="brewersTips" value={this.state.brewersTips} className="form-control" type="text"/><br/>
                    <label htmlFor="">Attenuation Level</label>
                    <input onChange={this.handleChange} name="attenuationLevel" value={this.state.attenuationLevel} className="form-control" type="number"/><br/>
                    <label htmlFor="">Contributed by</label>
                    <input onChange={this.handleChange} name="contributedBy" value={this.state.contributedBy} className="form-control" type="text"/><br/>
                    <button className="btn btn-primary" type="submit">ADD NEW</button>
                </form>
                </div>
            </div>
        )
    }
}
