import React, {Component} from 'react'

import BeerService from "../../services/BeerServices"
import NavBar from "../../components/Ui/Navbar"

class BeerForm extends Component {
    constructor (){
        super ()
        this.state = {
            name: "",
            tagline: "",
            description: "",
            first_brewed: "",
            brewer_tips: "",
            attenuation_level: "",
            contributed_by: "",
            
        }
        this.BeerService = new BeerService()
    }
    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleFormSubmit = e => {
        e.preventDefault()
        this.BeerService
            .createBeer(this.state)
            .then(() => this.setState({
                name: "",
                tagline: "",
                description: "",
                first_brewed: "",
                brewer_tips: "",
                attenuation_level: "",
                contributed_by: ""
            }))
            .catch(err => console.log(err))
    }
    render () {
        return (
            <>
                <NavBar />
                <form onSubmit={this.handleFormSubmit} >
                    <label>Name<input onChange={this.handleInputChange} name="name" type="text" value={this.state.name}/></label>
                    <label>Tagline<input onChange={this.handleInputChange} name="tagline" type="text" value={this.state.tagline}/></label>
                    <label>Description<textarea onChange={this.handleInputChange} name="description" value={this.state.description}></textarea></label>
                    <label>First brewed<input onChange={this.handleInputChange} name="first_brewed" type="text" value={this.state.first_brewed}/></label>
                    <label>Brewer tips<input onChange={this.handleInputChange} type="text" name="brewer_tips" value={this.state.brewer_tips}/></label>
                    <label>Attenuation level<input onChange={this.handleInputChange} name="attenuation_level" type="number" value={this.state.attenuation_level}/></label>
                    <label>Contributed by<input onChange={this.handleInputChange} name="contributed_by" type="text" value={this.state.contributed_by}/></label>
                    <input type="submit" value="ADD NEW"/>
                </form>
            </>
        )
    }
}

export default BeerForm