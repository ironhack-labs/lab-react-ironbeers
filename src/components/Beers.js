import React from 'react';
import axios from "axios";
import Header from './Header';
import { Link } from 'react-router-dom';
import './Beers.css';

class Beers extends React.Component {
    state = {
        beers: [],
    }

    async componentDidMount() {
        const res = await axios.get("https://ih-beers-api2.herokuapp.com/beers");
        this.setState({
            beers: res.data,
        });
    }

    render() {
        const { beers } = this.state;
        return (
            <>
                <Header />
                <div className="container">
                    <ul className="beerUl">
                        {beers.length ? (
                            beers.map((beer) => {
                                return (
                                    <Link className="row beer" to={`/${beer._id}`}>
                                        <div className="col-3">
                                            <img src={beer.image_url} alt={beer._id} />
                                        </div>
                                        <div className="col-9">
                                            <h4>{beer.name}</h4>
                                            <h5>{beer.tagline}</h5>
                                            <h6><strong>Created by: </strong>{beer.name}</h6>
                                        </div>
                                    </Link>
                                );

                            })
                        ) : (
                            <p>Buffering...</p>
                        )}
                    </ul>
                </div>
            </>
        );
    }
}


export default Beers;