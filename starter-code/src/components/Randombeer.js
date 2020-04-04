import React from 'react'
import axios from 'axios'
import Navbar from "./Navbar"

class Randombeer extends React.Component {
    constructor() {
        super()

        this.state = {
            randomBeer: {}
        }
    }    

    componentDidMount() {
        axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
        .then(response => {
            this.setState({
                randomBeer: response.data
            })
        })
        .catch(err => {
            console.log("error loading specific page", err)
        })
    }

    render() {
        return (
            <div className="randombeer">
                <div className="navbar">
                    <Navbar/>
                </div>

                <div className="randombeerpage">
                    <img src={this.state.randomBeer.image} alt=""/>
                    <h2>{this.state.randomBeer.name}</h2>
                    <p>{this.state.randomBeer.tagline}</p>
                    <p>{this.state.randomBeer.first_brewed}</p>
                    <p>{this.state.randomBeer.attenuation_level}</p>
                    <p>{this.state.randomBeer.description}</p>
                    <p>{this.state.randomBeer.contributed_by}</p>
                </div>
            </div>
        )
    }
}

export default Randombeer