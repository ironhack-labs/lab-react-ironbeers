import React, { Component } from 'react'
import axios from 'axios'

export default class newBeer extends Component {

    constructor(props){
        super(props)
        this.state = {
            name: '',
            tagline: '',
            descripton: '',
            first_brewed: '',
            brewers_tips: '',
            attenuation_level: 0,
            contributed_by: ''
        }
    }

    addBeer = (e) =>{

        console.log(e.target.children)

        axios.post(`https://ih-beers-api2.herokuapp.com/beers`,  this.state)
        .then((res) => {
          console.log(res)
        }).catch(err=> console.error(err))
    }
    
    updateState = (e)  => {
        console.log(e.target.name, e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    


    render() {
        console.log('called')
        return (
            <div>
                <form className="theForm" onSubmit = {this.addBeer}>
                    <h2>Name:</h2>
                        <input type="text" name="name" onChange={this.updateState} className="input"/>
                    <h2>Tagline:</h2>
                        <input type="text" name="tagline" onChange={this.updateState}  className="input"/>
                    <h2>Description:</h2>
                        <input type="text" name="description" onChange={this.updateState} className="input"/>
                    <h2>First Brewed Date:</h2>
                        <input type="text" name="first_brewed" onChange={this.updateState} className="input"/>
                    <h2>Brewer's Tips:</h2>
                        <input type="text" name="brewers_tips" onChange={this.updateState} className="input"/>
                    <h2>Attenutation Level:</h2>
                        <input type="number" name="attenutation_level" onChange={this.updateState} className="input"/>
                    <h2>Your Name:</h2>
                        <input type="text" name="contributed_by" onChange={this.updateState} className="input"/>
                    <button className="theButton">Add New</button>
                </form> 
            </div>
        )
    }
}