import React, { Component } from 'react'
import Navbar from '../navbar/Navbar'
import axios from 'axios'

export class BeerDetail extends Component {
    id = this.props.match.params.id;
    state = {
        beer: {}
    }
 

    componentDidMount() {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${this.id}`)
        .then(response => {
            this.setState({beer: response.data})
            console.log(response.data)
            
        })
    }

    render() {
        return (
            <div>
                <Navbar></Navbar>
                
                <div className="card w-25 mx-auto">
                    <img src={this.state.beer.image_url} className="mx-auto my-5" alt="..." width="125px" />
                    <div className="card-body">
                        <h5 className="card-title text-start">{this.state.beer.name}</h5>
                        <h4 className="card-text text-muted text-end"><small>{this.state.beer.attenuation_level}</small></h4>
                        <p className="card-text text-muted text-start">{this.state.beer.tagline}</p>
                        <strong className="card-text text-end"><small>{this.state.beer.first_brewed}</small></strong>
                        <p className="card-text text-start lh-1"><small>{this.state.beer.description}</small></p>
                        <p className="card-text text-start"><small>Created by: {this.state.beer.contributed_by}</small></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default BeerDetail

