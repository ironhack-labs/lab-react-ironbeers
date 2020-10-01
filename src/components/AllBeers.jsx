import React from 'react';
import { Link } from 'react-router-dom';
import { getAllBeers } from '../services/allServices';
import './AllBeers.css';

export default class AllBeers extends React.Component {
    state = {
        beers: []
    };

    componentDidMount() {
        getAllBeers()
            .then(beers => {
                this.setState({
                    beers
                })
            })

    };

    render() {
        const beers = this.state.beers


        if (!beers.length) {
            return (
                <div>Loading...</div>
            )
        } else {
            const beersLi = beers.map(beer => (

                <li className="beerCard">
                    <Link className="liLink">
                        <img src={beer.image_url} className="beerPhotoSm" alt="beer" />
                        <h3>{beer.name}</h3>
                        <p>{beer.tagline}</p>
                        <p><b>Created by:</b>{beer.contributed_by}</p>
                    </Link>
                </li>

            ));
            return (
                <ul className="AllBeers">
                    {beersLi}
                </ul>
            );
        }


    };
};