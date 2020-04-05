import React from 'react'
import axios from 'axios'
import Navbar from "./Navbar"

class Newbeer extends React.Component {
    constructor() {
        super()

        this.state = {
         
        }
    } 
    
    handleFormSubmit = event => {
        event.preventDefault()
        this.props.addTheBeer(this.state)
        this.setState({
            name: ""
            tagline: ""
            description: ""
            first_brewed: ""
            brewers_tips: ""
            attenuation_level: ""
            contributed_by: ""
        })
    }

    handleChange(event) {
        let {name,value} = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="newbeer">
                <div className="navbar">
                    <Navbar/>
                </div>

                <div className="newbeerpage">
                    <form onSubmit={this.handleFormSubmit}>
                        <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />
                        <input type="text" name="tagline" value={this.state.tagline} onChange={(e) => this.handleChange(e)}/>
                        <input type="text" name="description" value={this.state.description} onChange={(e) => this.handleChange(e)}/>
                        <input type="text" name="first_brewed" value={this.state.first_brewed} onChange={(e) => this.handleChange(e)}/>
                        <input type="text" name="brewers_tips" value={this.state.brewers_tips} onChange={(e) => this.handleChange(e)}/>
                        <input type="numbers" name="attenuation_level" value={this.state.attenuation_level} onChange={(e) => this.handleChange(e)}/>
                        <input type="text" name="contributed_by" value={this.state.contributed_by} onChange={(e) => this.handleChange(e)}/>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        )
    }
}


export default Newbeer