import React from 'react'
import BeerDetails from '../components/BeerDetails'
import axios from 'axios'

class RandomBeer extends React.Component {
    state = {
        beer: {}
    }

    componentDidMount(){
        axios.get("https://ih-beers-api2.herokuapp.com/beers/")
        .then(beers => {
            let randomNum = Math.floor(Math.random() * beers.data.length)
            let beer = beers.data[randomNum]
            this.setState({beer: beer})
        })
    }

    render(){
        return(
            <div>
                <BeerDetails
                    image_url={this.state.beer.image_url}
                    name={this.state.beer.name}
                    tagline={this.state.beer.tagline}
                    description={this.state.beer.description}
                    contributed_by={this.state.beer.contributed_by}
                />
            </div>
        )
    }
}

export default RandomBeer;