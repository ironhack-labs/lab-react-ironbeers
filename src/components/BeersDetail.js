import axios from 'axios';
import React, { Component } from 'react';
import Nav from './MyNav';

class BeersDetail extends Component {

    state = {
        beersDetail: []
    }

    async componentDidMount() {
        try {
            let beerId = this.props.match.params.beerId
            let response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            console.log('recieved response')
            this.setState({
                beersDetail: response.data
            })
        }
        catch(error) {
            console.log('Failed to fetch beer details ', error)
        }
    }


    render() {
        const {beersDetail} = this.state
        return (
            <div>
                <Nav />
                <img src={beersDetail.image_url} style={{width: '200px'}} alt={beersDetail.name}></img>
                <h1>{beersDetail.name}</h1>
                <h3>{beersDetail.tagline}</h3>
                <p>{beersDetail.first_brewed}</p>
                <p>{beersDetail.attenuation_level}</p>
                <p>{beersDetail.description}</p>
                <p>{beersDetail.contributed_by}</p>
            </div>
        )
    }
}

export default BeersDetail