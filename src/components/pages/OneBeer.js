import React, { Component } from 'react'
import axios from 'axios'

import OneBeerCard from './OneBeerCard'

class OneBeer extends Component {
    constructor() {
        super()
        this.state = {
            beers: []
        }
    }
    
    getOneBeer() {

    const id = this.props.match.params.id

    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((response) => {
        this.setState({ beers: response.data });
      })
      .catch((error) => console.log(error));
    }
    componentDidMount() {
    this.getOneBeer();
    }

    componentDidUpdate(prevProps, prevState) {
        this.getOneBeer();
    }

    render() {
        console.log(this.state.beers)
        if (!this.state) return(<div>esperando</div>)
        return (
            <>
                <OneBeerCard {...this.state.beers}/>
            </>
        )
    }
}

export default OneBeer