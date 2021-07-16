import axios from 'axios'
import React from 'react'
import Navbar from './Navbar'

class NewBeer extends React.Component{
    state = {
        name:"",
        tagline:"", 
        description:"", 
        first_brewed:"", 
        brewers_tips:"", 
        attenuation_level:0, 
        contributed_by:"",
        image_url:""
    }
    handleChange = (event) =>{
        let {name, value} = event.target
        this.setState({
            [name]: value,
        })
    }

    handleSubmitForm = async (event) =>{
        event.preventDefault()
        const newBeer = await axios.post ("https://ih-beers-api2.herokuapp.com/beers/new", this.state)
        console.log(newBeer)
        this.setState({
            name:"",
            tagline:"", 
            description:"", 
            first_brewed:"", 
            brewers_tips:"", 
            attenuation_level:0, 
            contributed_by:"",
            image_url:""
        })
    }

    render(){
        const {name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by, image_url } = this.state
        return (
            <form onSubmit = {this.handleSubmitForm}>
                <label> Name</label>
                <input type="text" name="name" onChange={this.handleChange} value={name}/>

                <label> Tagline</label>
                <input type="text" name="tagline" onChange={this.handleChange} value={tagline}/>

                <label> Description</label>
                <input type="text" name="description" onChange={this.handleChange} value={description}/>

                <label> First Brewed</label>
                <input type="text" name="first_brewed" onChange={this.handleChange} value={first_brewed}/>

                <label> Brewers Tips</label>
                <input type="text" name="brewers_tips" onChange={this.handleChange} value={brewers_tips}/>

                <label> Attenuation Level</label>
                <input type="number" name="attenuation_level" onChange={this.handleChange} value={attenuation_level}/>

                <label> Contributed By</label>
                <input type="text" name="contributed_by" onChange={this.handleChange} value={contributed_by}/>

                <label> Image</label>
                <input type="text" name="image_url" onChange={this.handleChange} value={image_url}/>

                <button type="submit">Create</button>
            </form>
        )
    }
}

export default NewBeer