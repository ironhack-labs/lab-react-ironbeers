import React, { Component } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import houseLogo from "../../assets/pngfind.com-white-house-logo-png-5898244.png"
import "./BeerForm.css"

const initialState = {
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: ""
}

class BeerForm extends Component {
    constructor(props) {
        super(props)

        this.state = {...initialState}
    }

    onChangeValue = (e) => {
        this.setState({
            [e.target.name]: e.target.type == "text" || "textarea" ? e.target.value : Number(e.target.value)
        })
    }

    onSubmitBeer = (e) => {
        e.preventDefault();

        if (!this.state.name || !this.state.tagline || !this.state.description || !this.state.first_brewed || !this.state.brewers_tips || !this.state.attenuation_level || !this.state.contributed_by  || this.state.attenuation_level < 0) {
            return
        }

        axios.post("https://ih-beers-api2.herokuapp.com/beers/new", {...this.state})
        .then(() => {
            this.setState({...initialState})
        })

    }

    render() {
        return (
            <div className="BeerForm">
                <div className="blue-header">
                    <Link to="/">
                        <img src={houseLogo}/>
                    </Link>
                </div>
                
                <form onSubmit={this.onSubmitBeer}>
                    <div>
                        <label htmlFor="name">Name </label>
                        <input className="form-control" type="text" name="name" onChange={this.onChangeValue} value={this.state.name}></input>
                    </div>
                    <div>
                        <label htmlFor="tagline">Tagline </label>
                        <input className="form-control" type="text" name="tagline" onChange={this.onChangeValue} value={this.state.tagline}></input>
                    </div>
                    <div>
                        <label htmlFor="description">Description </label>
                        <textarea className="form-control" type="text" name="description" onChange={this.onChangeValue} value={this.state.description}></textarea>
                    </div>
                    <div>
                        <label htmlFor="first_brewed">First brewd </label>
                        <input className="form-control" type="text" name="first_brewed" onChange={this.onChangeValue} value={this.state.first_brewed}></input>
                    </div>
                    <div>
                        <label htmlFor="brewers_tips">Brewers tips </label>
                        <input className="form-control" type="text" name="brewers_tips" onChange={this.onChangeValue} value={this.state.brewers_tips}></input>
                    </div>
                    <div>
                        <label htmlFor="attenuation_level">Attenuation level </label>
                        <input className="form-control" type="number" name="attenuation_level" onChange={this.onChangeValue} value={this.state.attenuation_level}></input>
                    </div>
                    <div>
                        <label htmlFor="contributed_by">Contributed by </label>
                        <input type="text" name="contributed_by" onChange={this.onChangeValue} value={this.state.contributed_by}></input>
                    </div>
                    <button type="submit" className="btn btn-info">ADD NEW</button>
                </form>
            </div>
        )
    }
}

export default BeerForm