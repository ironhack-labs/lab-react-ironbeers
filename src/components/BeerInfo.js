import React from 'react'
import axios from 'axios'
export default class BeerInfo extends React.Component{
    state = {
        beer: {}
    }
    componentDidMount(){
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`)
            .then( ({data: beer}) => this.setState({beer}))
    }
    render(){
        const {image_url, name, description, tagline, attenuation_level, contributed_by, first_brewed} = this.state.beer
        return (
            <div>
            <div className="beer-image">
                <img alt={name} src={image_url}/>
            </div>
            <div>
                <h2>{name}</h2>
                <p><i>{tagline}</i></p>
                <p>(first brewed in {first_brewed})</p>
                <p> {description}</p>
                <p>attenuation: {attenuation_level}</p>
                <p><strong>by {contributed_by}</strong></p>
            </div>
        </div>
        )
    }
}