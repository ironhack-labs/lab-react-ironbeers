import React, { Component } from 'react'
import OneBeer from './OneBeer'
import axios from 'axios'


class BeerDetails extends Component {

    state = {
        beer: {}
    }
    
    componentDidMount() {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`)
        .then(res => this.setState({beer: res.data}))
        .catch(err => console.log(err))
    }

    render() {
        const {beer} = this.state
        
        if(beer.length === 0) {
            return <div>is Loading...</div>
        }
        return (
            <div>
                <OneBeer beer={this.state.beer} />
            </div>
        )
    }
}

export default BeerDetails;
