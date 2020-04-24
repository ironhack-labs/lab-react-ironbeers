import React, { Component } from 'react';
import axios from 'axios';
import Nav from './Nav';



class BeerDetail extends Component {

    constructor() {
        super()
        this.state = {
            beer: {},
        }
    }

    componentDidMount() {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`)
            .then((response) => {
                console.log(response.data);
                this.setState({
                    beer: response.data,
                })
            })
            .catch((error) => {
                this.setState({
                    error: error,
                })
            })
    }

    render() {
        const { beer } = this.state;
        return (
            <div>
                <Nav />
                <div className='Beer-container'>
                    <div className='image-beer-container'>
                        <img className='image-beer' src={beer.image_url} alt='beer-detail'></img>
                    </div>
                    <div className='info-beer'>
                        <p>{beer.name}</p>
                        <p>{beer.tagline}</p>
                        <p>{beer.first_brewed}</p>
                        <p>{beer.attenuation_level}</p>
                        <p>{beer.description}</p>
                        <p>{beer.contributed_by}</p>
                    </div>
                </div>
            </div>
        )
    }
}


export default BeerDetail;