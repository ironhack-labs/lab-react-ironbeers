import React, { Component } from 'react'
//import {  withRouter } from 'react-router-dom'
import Header from './Header';


export default class NewBeer extends Component {

    state={
        name:'newBeer',
        tagline:'',
        description:'',
        firstBrewed:'',
        attenuationLevel:0,
        contributedBy:'',
        
    }
   
    handleInput = (e) => {
        let {name, value} = e.target
        this.setState({[name]:value})
    }    

    handleSubmit = (e) =>{
        e.preventDefault();
        fetch('https://ih-beers-api2.herokuapp.com/beers/new', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify(this.state)
        })
        .then(data => console.log(data))
        this.props.history.push('/')    
    }

    render(){
    return (
        <div>
            <Header/>
            <form  onSubmit={(e) => this.handleSubmit(e)}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={this.state.name} onChange={(e) => this.handleInput(e)}/>

                <label htmlFor="tagline">Tagline:</label>
                <input type="text" id="tagline" name="tagline" value={this.state.tagline} onChange={(e) => this.handleInput(e)}/>

                <label htmlFor="description">Description:</label>
                <input type="text" id="description" name="description" value={this.state.description} onChange={(e) => this.handleInput(e)}/>

                <label htmlFor="first_brewed">First brewed:</label>
                <input type="text" id="first_brewed" name="firstBrewed" value={this.state.firstBrewed} onChange={(e) => this.handleInput(e)}/>

                <label htmlFor="attenuation_level">Attenuation level:</label>
                <input type="number" id="attenuation_level" name="attenuationLevel" value={this.state.attenuationLevel} onChange={(e) => this.handleInput(e)}/>

                <label htmlFor="contributed_by">Contributed by:</label>
                <input type="text"  id="contributed_by" name="contributedBy" value={this.state.contributedBy} onChange={(e) => this.handleInput(e)}/>
                <input type="submit" value="Submit"></input>
            </form>
            
        </div>
    )
}
}