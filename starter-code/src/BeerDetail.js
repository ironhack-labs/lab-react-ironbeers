import React, { Component } from 'react'
import Axios from 'axios'
import './BeerDetail.css'

export default class BeerDetail extends Component {

    state = {
        specificBeer: {}
    }

componentDidMount(){
    const path = `https://ih-beers-api.herokuapp.com/beers/${this.props.match.params.beerId}`;
    console.log(path)
    Axios.get(path)
    .then(specificBeer => {
    this.setState({
        specificBeer: specificBeer.data
    })
    })
}

    render() {
        console.log(this)
        return (
            <div className='theBeer'>
                <h1>Details</h1>
                <div className='beerDetail'>

                <h3>{this.state.specificBeer.name}</h3>
                <img src={this.state.specificBeer.image_url} width='100px' height='200px'/>
                <p>{this.state.specificBeer.description}</p>
                </div>
            </div>
        )
    }
}
