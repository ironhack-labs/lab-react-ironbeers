import React, { Component } from 'react'
import axios from 'axios'
// import { API_URL } from '../config'
import { Link } from 'react-router-dom'

class ListBeers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            beers: []
        };
    }

    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
            .then((res) => {
                this.setState({
                    beers: res.data
                })
            })


    }

    render() {

        const ListBeer = this.state.beers.map((beer) => {
            return (
            
            <div key={beer._id}>
                <img src={beer.image_url} alt="Beer img" style={{ width: '30px' }} />
                <Link key={beer._id} to={'/beers/' $ beer._id}><h1>{beer.name}</h1></Link>
                <h3>{beer.tagline}</h3>
                <p>{beer.contributed_by}</p>
            </div>
            )
        }

        return (
            <div>
                {ListBeer}
            </div>
        )
    }
}


export default ListBeers;    
