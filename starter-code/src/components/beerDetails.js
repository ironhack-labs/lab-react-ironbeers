import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

class beerDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { beerList: props.match.params.id }
    }

    getTheBeers = () => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${this.state.beerList}`)
            .then(responseFromApi => {
                this.setState({
                    beerList: responseFromApi.data
                })
            })
    }

    componentDidMount() {
        this.getTheBeers();
      }

    render() {
        const beer = this.state.beerList;
        if (beer) {
            return (
                <div>
                    <h1>{beer.name}</h1>
                    <p>{beer.tagline}</p>
                    <img style={{height:'150px'}} src={beer.image_url} alt=''/>
                    <p>First brewed: {beer.first_brewed}</p>
                    <p>Attenuation level: {beer.attenuation_level}</p>
                    <h4>{beer.description}</h4>
                    <span>Contributed by: {beer.contributed_by}</span> <br/>
                    <Link to='/allBeers'>Back to beers List</Link>
                </div>
            )
        } else {
            return 'Loading'
        }
    }
}


export default beerDetails
