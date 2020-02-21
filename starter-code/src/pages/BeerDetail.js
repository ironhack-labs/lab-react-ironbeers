import React, { Component } from 'react'
import Header from '../components/Header'
import Axios from 'axios'
import './BeerDetails.css'

export default class BeerDetail extends Component {
    state = {
        beer: {}
    }
    async componentDidMount() {
        let url = 'https://ih-beers-api2.herokuapp.com/beers/'
        if( this.props.match.params.id ) url += this.props.match.params.id
        else url += 'random'
        console.log();
        
        const {data: beer} = await Axios.get(url)
        this.setState({beer})
    }
    render() {
        if(!this.state.beer.name) return <p>Loading...</p>
        const {image_url,name,tagline,first_brewed,attenuation_level,description,contributed_by} = this.state.beer
        return (
            <div>
                <Header />
                <div className="generalContainerDetail">
                    <img src={image_url} alt={name}/>
                    <div><b>{name}</b><span>{attenuation_level}</span></div>
                    <div><span>{tagline}</span><span>{first_brewed}</span></div>
                    <div>{description}</div>
                    <div>{contributed_by}</div>
                </div>
            </div>
        )
    }
}
