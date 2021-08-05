import React, { Component } from "react";
import "./newbeer.css"
import { Link } from "react-router-dom";
import axios from "axios";

const reset = {
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: ""
}

class NewBeer extends Component {

    state = reset


    handleChange = (event) => {
        console.log(event.target)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    addBeer = async (event) => {

        event.preventDefault()
        try {
            await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", this.state)
            this.setState(reset)

        } catch (error) {
            
            alert("Tem algo errado ai",error)

        }

    }

    render() {

        return (
            <div>
                <nav className="nav-home">
                    <Link to="/">
                        <img className="img-home" src="https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-house-icon-png-image_695369.jpg"></img>
                    </Link>
                </nav>
                <div className="newbeer-center">
                    <form autoComplete = {false} className="newbeer-form">
                        <label>Name</label>
                        <input
                            onChange={this.handleChange}
                            name="name"
                            type="text"
                            value={this.state.name}
                            placeholder="Name"
                        />
                        <label>Tagline</label>
                        <input
                            onChange={this.handleChange}
                            name="tagline"
                            type="text"
                            value={this.state.tagline}
                            placeholder="Name" />
                        <label>Description</label>
                        <input
                            onChange={this.handleChange}
                            name="description"
                            type="text"
                            value={this.state.description}
                            placeholder="Name" />
                        <label>First Brewed</label>
                        <input
                            onChange={this.handleChange}
                            name="first_brewed"
                            type="text"
                            value={this.state.first_brewed}
                            placeholder="Name"
                        />
                        <label>Brewers Tips</label>
                        <input
                            onChange={this.handleChange}
                            name="brewers_tips"
                            type="text"
                            value={this.state.brewers_tips}
                            placeholder="Name" />
                        <label>Attenuation Level</label>
                        <input
                            onChange={this.handleChange}
                            name="attenuation_level"
                            type="text"
                            value={this.state.attenuation_level}
                            placeholder="Name" />
                        <label>Contributed By</label>
                        <input
                            onChange={this.handleChange}
                            name="contributed_by"
                            type="text"
                            value={this.state.contributed_by}
                            placeholder="Name" />
                        <button onClick={this.addBeer} > Add Beer</button>
                    </form>
                </div>


            </div>

        )
    }
}
export default NewBeer