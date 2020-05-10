import React, { Component } from 'react'
import Header from "../components/Header"
import axios from "axios"

export class NewBeer extends Component {
       constructor(props) {
      super(props)
      this.state = {
        name:"",
        tagline:"",
        description:"",
        firstBrewed:"",
        brewersTips:"",
        attenuationLevel:0,
        contributedBy:""
    }
      
    }

    handleChange =(e)=>{
        
        this.setState({[e.target.name] : e.target.value})

    }
    handlePostRequest =(e)=>{
        e.preventDefault()
        const {name,
        tagline,
        description,
        firstBrewed,
        brewersTips,
        attenuationLevel,
        contributedBy} = this.state
        axios.post("https://ih-beers-api2.herokuapp.com/beers/new",{name,
        tagline,
        description,
        firstBrewed,
        brewersTips,
        attenuationLevel,
        contributedBy}).then(apiResponse=>console.log(apiResponse)).catch(apiErr=>console.log(apiErr))
        
    }
    render() {
        return (
            <div>
        <Header />
            <div className="container">
        <h1>Create a new Beer</h1>
        <form>
            <label>Name</label>
            <input name="name" type="text" onChange={this.handleChange}></input>
            <label>Tagline</label>
            <input name="tagline" type="text" onChange={this.handleChange}></input>
            <label>Description</label>
            <input name="description" type="text" onChange={this.handleChange}></input>
            <label>First Brewed</label>
            <input name="firstBrewed" type="text" onChange={this.handleChange}></input>
            <label>Brewers Tips</label>
            <input name="brewersTips" type="text" onChange={this.handleChange}></input>
            <label>Attenuation Level</label>
            <input name="attenuationLevel" type="number" onChange={this.handleChange}></input>
            <label>Contributed By</label>
            <input name="contributedBy" type="text" onChange={this.handleChange}></input>
            <button onClick={this.handlePostRequest}>Create Beer</button>
        </form>
            
        </div>
        </div>
        )
    }
}

export default NewBeer

