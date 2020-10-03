import React from 'react';
import { Link } from 'react-router-dom';
import { getAllBeers } from '../services/allServices';
import './AllBeers.css';

export default class AllBeers extends React.Component {
    state = {
        beers: [],
        search: '',
    };

    componentDidMount() {
        getAllBeers()
            .then(beers => {
                this.setState({
                    beers
                });
            });
    };

    submitForm(event) {
        event.preventDefault();
    };

    setName(event) {
        this.setState({
            search: event.target.value.toLowerCase()
        })
    }

    render() {
        const beers = this.state.beers.filter(beer => beer.name.toLowerCase().includes(this.state.search))

        if (!this.state.beers.length) {
            return (
                <div>Loading...</div>
            )
        } else if (this.state.beers.length && !beers.length) {
            return (
                <div>
                    <form onSubmit={this.submitForm}>
                        <input className="input" type="text" name="name" value={this.state.name} placeholder="Name" onChange={(e) => this.setName(e)} />
                    </form>
                    <ul className="AllBeers">
                        No matches try again
                    </ul>
                </div>
            )
        } else {
            const beersLi = beers.map(beer => (
                    <li className="beerCard">
                        <Link to={`/beers/${beer._id}`} className="liLink">
                            <img src={beer.image_url} className="beerPhotoSm" alt="beer" />
                            <h3>{beer.name}</h3>
                            <p>{beer.tagline}</p>
                            <p><b>Created by: </b>{beer.contributed_by && beer.contributed_by.split('<')[0]}</p>
                        </Link>
                    </li>
            ));
            return (
                    <div>
                        <form onSubmit={this.submitForm}>
                            <input className="input" type="text" name="name" value={this.state.name} placeholder="Name" onChange={(e) => this.setName(e)} />
                        </form>
                        <ul className="AllBeers">
                            {beersLi}
                        </ul>
                    </div>
            );
        }
    };
};