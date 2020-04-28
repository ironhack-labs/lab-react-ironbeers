import React from 'react'
import BeerDetails from '../components/BeerDetails'
import axios from 'axios'


class SingleBeer extends React.Component {
    state = {
        beer: {}
    }

    componentDidMount(){
        axios.get("https://ih-beers-api2.herokuapp.com/beers/" + this.props.beerId)
        .then(beer => {
            this.setState({beer: beer.data})
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

export default SingleBeer;