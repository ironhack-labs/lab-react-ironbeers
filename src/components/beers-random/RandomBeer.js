
import axios from 'axios'
import React, { Component } from 'react'
import Header from '../home-page/Header'

class RandomBeer extends Component {

    state = {
        beer: null
    }

    getBeer() {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then(response => {
                this.setState({ beer: response.data })
            })
            .catch(err => console.log(err))
    }

    componentDidMount() {
        this.getBeer()
    }

    render() {
        const { beer } = this.state
        if (!beer) return <></>
        return (
            <div>
                <Header />
            <div>
                <img src={beer.image_url} alt={beer.name} />
            </div>
            </div>
        )
    }
}

export default RandomBeer