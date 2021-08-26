
import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../home-page/Header';
import './BeerList.css'
class BeerList extends Component {


    state = {
        beers: null
    }

    getBeers() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => {
                this.setState({ beers: response.data })
            })
            .catch(err => { console.log(err) })
    }

    componentDidMount() {
        this.getBeers()
    }



    render() {
        const { beers } = this.state
        console.log(beers)
        if (!beers) return <> </>;
        return (
            <div className="container " >
                <Header />
                <div>
                    {beers.map(beer =>
                        <div className="beerContainer" key={beer._id}>
                                    <img src={beer.image_url} alt={beer.name} />

                                <div className="card-body">
                                    <h5 className="card-title">{beer.name}</h5>
                                    <p className="card-text">{beer.tagline}</p>
                                    <Link to={`/beers/${beer._id}`}><h3>{beer.name}</h3></Link>
                                </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
export default BeerList