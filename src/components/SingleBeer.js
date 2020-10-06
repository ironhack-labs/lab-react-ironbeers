import React from 'react';
import { Link } from 'react-router-dom';
import { getSingleBeer } from '../services/api-client';
import './SingleBeer.css'

export default class OneBeer extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    state = {
        beer: null
    };

    componentDidMount() {
        getSingleBeer(this.props.match.params.id)
            .then(beer => {
                this.setState({
                    beer
                })
            })

    };

    render() {
        const beer = this.state.beer


        if (!beer) {
            return (
                <div>Loading...</div>
            )
        } else {
            return (
                <div className="singleBeer">
                    <div>
                        <div className="singleBeerDetai">
                            <img src={beer.image_url} className="singleBeerImg" alt="beer" />
                            <div>
                                <div className="beerDescription">
                                    <h3>{beer.name.slice(0, 26)}</h3>
                                    <p>{beer.first_brewed}</p>
                                </div>
                                <div className="beerNumber">
                                    <h4>{beer.attenuation_level}</h4>
                                    <h5>{beer.tagline}</h5>
                                </div>
                                <p>{beer.description}</p>
                                <p>{beer.contributed_by}</p>
                                <Link to="/beers">
                                    <div className="btn btn-primary">All beers</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    };
};