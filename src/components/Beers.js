import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

class Beers extends React.Component {

    state = {
        beers: null
    }

    getBeers = () => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
            .then(response => {
                this.setState({
                    beers: response.data
                })
            })
            .catch(err => console.log(err));
    }

    componentDidMount() {
        this.getBeers();
    }
    render() {
        if (!this.state.beers) return <h1>Loading ...</h1>;
        return (
            <div>
                <Header />
                {this.state.beers.map(beer =>
                    <Link className="beer-card" to={`/beers/${beer._id}`} key={beer._id} >
                        <div className="beer-card-img">
                            <img src={beer.image_url} alt={beer.name}/>
                        </div>
                        <div className="beer-card-description">
                            <h2>{beer.name}</h2>
                            <p className="tagline">{beer.tagline}</p>
                            <p className="contributed"><strong>Created by:</strong> {beer.contributed_by}</p>
                        </div>
                    </Link>
                )}
            </div>
        )
    }
}

export default Beers;