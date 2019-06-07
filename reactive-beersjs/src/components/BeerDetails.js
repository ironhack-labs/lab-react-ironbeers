
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Api from '../services/beers-services'




class BeerDetails extends Component {

    constructor(props) {
        super(props)
        this.services = new Api()
        this.state = { beer: {} }

    }

    componentDidMount() {
        this.services.getOneBeer(this.props.match.params.id)
            .then(beer => {
              console.log("pepe",this.state)
              this.setState({ beer: beer }) 
            } )
            
    }
    render() {
        const { name, image_url, tagline, attenuation_level, description, contributed_by } = this.state.beers
        return (
            <div >
                <img src={image_url} alt={name} />
                <h3>{name}</h3>
                <p>{tagline}</p>

                <p>{attenuation_level}</p>
                <p>{description}</p>
                <p>{contributed_by}</p>
              
            </div >
        )
    }
}

export default BeerDetails