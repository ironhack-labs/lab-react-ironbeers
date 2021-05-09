import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

export default class Beer extends React.Component {

    state = {
        beers: []
    }


    getBeers = () => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
            .then(response => {
                console.log(response.data);
                this.setState({
                    beers: response.data
                })
            })
            .catch(err => console.log(err));
    }

    componentDidMount = () => {
        this.getBeers()
    }

    searchBeer = (query) => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
            .then(response => {
                this.setState({
                    beers: response.data
                })
            })
            .catch(err => console.log(err))
    }

    handleSearch = (event) => {
        event.preventDefault();
        const query = event.target.q.value
        if (query) return this.searchBeer(query)
        return this.getBeers()
    }

    render() {

        const beersArr = [...this.state.beers];
        const beerInfo = beersArr.map(beer => {
            return (
                <Link key={beer._id}
                    to={`/${beer._id}`}
                    className='links'  >
                    <div className='beerlist'>
                        <img src={beer.image_url} alt="pic" />
                        <div className='beerInfo'>
                            <h2>{beer.name}</h2>
                            <h6>{beer.tagline}</h6>
                            <p><b>Created by:</b>  {`${beer.contributed_by}`.slice(0, 10)}</p>
                        </div>
                    </div>
                </Link>
            )
        })

        return (

            <div>
                <Header />
                <form onSubmit={this.handleSearch}>
                    <div>
                        <input className="search" type="text" name='q' />
                        <button type='submit' className='searchButton'>Search</button>
                    </div>
                </form>
                { beerInfo}
            </div >
        )
    }
}
