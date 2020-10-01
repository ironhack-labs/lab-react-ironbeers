import React, {Component} from 'react'
import axios from 'axios'

import OneBeerCard from './OneBeerCard'


class RandomBeer extends Component {
    constructor() {
        super()
        this.state = {
            beers: []
        }
    }
    
    getRandomBeer() {

    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((response) => {
        this.setState({ beers: response.data });
      })
      .catch((error) => console.log(error));
    }
    componentDidMount() {
    this.getRandomBeer();
    }

    render() {
        if (!this.state) return(<div>esperando</div>)
        return (
            <>
                <OneBeerCard {...this.state.beers}/>
            </>
        )
    }
}

export default RandomBeer