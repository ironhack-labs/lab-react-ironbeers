import React, { Component } from 'react'
import axios from 'axios'
import {API_URL} from '../config'
import {Link} from 'react-router-dom'


class SingleBeer extends Component {

    state = {
        oneBeer: ''
    }

    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
            .then((res) => {
                this.setState({
                    oneBeer: res.data
                })
            })
    }

    render() {
        // if (!this.state.todo){
        //     return <p>Loading ....</p>
        // }
  
        // const {image, name, tagline, first_brewed, attenuation_level, description, contributed_by} = this.state.oneBeer

        return (
            <div>
                <p> {this.state.beer.image_url}</p>
                <p> {this.state.beer.name}</p>
                <p> {this.state.beer.tagline}</p>
                <p> {this.state.beer.frist brewed}</p>
                <p> {this.state.beer.attenuation_level}</p>
                <p> {this.state.beer.description}</p>
                <p> {this.state.beer.contributed_by}</p>
                <Link to='/singlebeer'>Single Beer</Link>
                
            </div>
        )
    }
}

export default SingleBeer