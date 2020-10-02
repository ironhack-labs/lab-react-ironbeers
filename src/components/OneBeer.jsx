import React from 'react';
import { Link } from 'react-router-dom';
import { getOneBeer } from '../services/allServices';
import './OneBeer.css';

export default class OneBeer extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    state = {
        beer: null
    };

    componentDidMount() {
        getOneBeer(this.props.match.params.id)
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
                <div className="OneBeer">
                    <div>
                        <div className="beerDetail liLink">
                            <img src={beer.image_url} className="beerPhotoBg" alt="beer" />
                            <div>
                                <div className="splitted">
                                    <h3>{beer.name.slice(0, 26)}</h3>
                                    <h4>{beer.attenuation_level}</h4>

                                </div>
                                <div className="splitted">
                                    <h5>{beer.tagline}</h5>
                                    <p>{beer.first_brewed}</p>
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