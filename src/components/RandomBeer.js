import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
export default class RandomBeer extends React.Component{
    state = {
        beer: {},
        loading: true
    }
    componentDidMount(){
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then( ({data: beer}) => this.setState({beer, loading: false}))
    }
    newBeer = () =>{
        this.setState({loading: true})
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then( ({data: beer}) => this.setState({beer, loading: false}))
    }
    render(){
        if(!this.state.beer){
            return (
            <>
            <div class="spinner-border spinner-border-sm" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow spinner-grow-sm" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          </>)
        }
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
        </div>)
    }
}