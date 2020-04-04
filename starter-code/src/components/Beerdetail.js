import React from 'react'
import axios from 'axios'
import Navbar from "./Navbar"

class Beerdetail extends React.Component {
    constructor() {
        super()

        this.state = {
            beers: {}
        }
    }
        
    componentDidMount() {
        axios.get(`https://ih-beers-api.herokuapp.com/beers/${this.props.match.params.id}`)
        .then(response => {
            let beerdetaildata = response.data
            this.setState({
                beers: beerdetaildata
            })
            console.log(this.state.beers)
        })
        .catch(err => {
            console.log("error loading specific page", err)
        })
    }

    render() {
        return (
            <div>
                <div className="navbar">
                    <Navbar/>
                </div>

                <div className="beerdetailpage">
                    <img src={this.state.image} alt=""/>
                    <h2>{this.state.name}</h2>
                    <p>{this.state.tagline}</p>
                    <p>{this.state.first_brewed}</p>
                    <p>{this.state.attenuation_level}</p>
                    <p>{this.state.description}</p>
                    <p>{this.state.contributed_by}</p>
                </div>
            </div>
        )
    }
}

export default Beerdetail
