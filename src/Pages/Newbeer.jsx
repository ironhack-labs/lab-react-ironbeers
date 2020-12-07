
import './Newbeer.css'
import axios from 'axios'


import React, { Component } from 'react'

export default class Newbeer extends Component {

    state = {
        name:"",
        tagline:"",
        description:"",
        firstBrewed:"",
        brewersTips:"",
        attenuationLevel: 0,
        contributedBy:""

    }

    handleTextChange=(event)=> {
        const { name, value } = event.target;
        this.setState({[name]:value})
    }

    
    handleSubmit = (evt) => {
        evt.preventDefault();
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', this.state)
            .then((response)=>{
                console.log(response)
                this.props.history.push('/') //easy way to redirect
            })
    }


    render() {



        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    
                    <input name="name" value={this.state.name} type="text" onChange={this.handleTextChange}/>  
                    <input name="tagline" value={this.state.tagline} type="text" onChange={this.handleTextChange}/> 
                    <input name="description" value={this.state.description} type="text" onChange={this.handleTextChange}/> 
                    <input name="firstBrewed" value={this.state.firstBrewed}  type="text" onChange={this.handleTextChange}/> 
                    <input name="brewersTips" value={this.state.brewersTips} type="text" onChange={this.handleTextChange}/> 
                    <input name="attenuationLevel" value={this.state.attenuationLevel}  type="number" onChange={this.handleTextChange}/> 
                    <input name="contributedBy" value={this.state.contributedBy} type="text" onChange={this.handleTextChange}/> 
                    <input type="submit" value="Submit"  onChange={this.handleTextChange}/>

              </form>
            </div>
        )
    }
}


