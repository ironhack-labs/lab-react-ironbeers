import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import FetchBeers from '../helpers/fetch-beers'
import BeerCard from './BeerCard';

export class AllBeers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            beers: null
        };
        this.getBeersInfo = new FetchBeers();
    }

    async componentDidMount() {
        try {
            const {data: beers} = await this.getBeersInfo.allBeers()
            this.setState({
                beers: beers
            })
        } catch (error) {
            console.log(error)
        }
    }

    generateView() {
        return this.state.beers.map(beer => (
            <Link key={beer._id} to={`/beer/${beer._id}`} className='text-dark text-decoration-none'>
                <BeerCard  id={beer._id} beerImg={beer.image_url} name={beer.name} tagline={beer.tagline} createdBy={beer.contributed_by}/>
            </Link>
        ))
    }


    render() {
        if (!this.state.beers) {
            return (<img src='https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif' alt="loading gif"/>)
        }
        return (
            <div>
               {this.generateView()} 
            </div>
        )
    }
}

export default AllBeers

