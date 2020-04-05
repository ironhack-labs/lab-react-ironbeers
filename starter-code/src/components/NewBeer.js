import React, { Component } from 'react'
import axios from 'axios'
import NavBar from './NavBar'
export class NewBeer extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            description: ""
        }
    }

    handleFormSubmit = e => {
        e.preventDefault();
        axios
            .post('https://ih-beers-api2.herokuapp.com/beers/new', this.state)
            .then(() => {
                this.setState({
                    name: "",
                    description: ""
                })
            })
    }
    handleChange = e => {
        const { name, value } = e.target
        this.setState(

            { [name]: value }
        )
    }


    render() {
        return (

            <div className="form">
                <NavBar />
                <div>
                    <form onSubmit={this.handleFormSubmit}>
                        <label>Name</label><br/>
                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={e => this.handleChange(e)}
                        /><br/>
                        <label>Tagline</label><br/>
                        <input
                            type="text"
                            name="tagline"
                            value={this.state.tagline}
                            onChange={e => this.handleChange(e)}
                        /><br/>
                        <label>Description</label><br/>
                        <textarea
                            type="text"
                            name="description"
                            value={this.state.description}
                            onChange={e => this.handleChange(e)}
                        /><br/>
                        <label>First brewed</label><br/>
                        <input
                            type="text"
                            name="first_brewed"
                            value={this.state.first_brewed}
                            onChange={e => this.handleChange(e)}
                        /><br/>
                        <label>Brewed tips</label><br/>
                        <input
                            type="text"
                            name="brewed_tips"
                            value={this.state.brewed_tips}
                            onChange={e => this.handleChange(e)}
                        /><br/>
                        <label>Attenuation level</label><br/>
                        <input
                            type="number"
                            name="attenuation_level"
                            value={this.state.attenuation_level}
                            onChange={e => this.handleChange(e)}
                        /><br/>
                        <label>Contributed by</label><br/>
                        <input
                            type="text"
                            name="contributed_by"
                            value={this.state.contributed_by}
                            onChange={e => this.handleChange(e)}
                        /><br/>

                        <input type="submit" value="Submit" />
                    </form>


                </div>



            </div>
        )
    }
}

export default NewBeer
