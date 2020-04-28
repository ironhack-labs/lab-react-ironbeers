import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Nav from './Nav';

const STATUS = {
    LOADING: 'LOADING',
    LOADED: 'LOADED',
    ERROR: 'ERROR'
}

//IT.3
class AllBeers extends Component {
    constructor() {
        super()
        this.state = {
            beers: [],
            status: '',
        }
    }

    componentDidMount() {
        this.setState({ status: STATUS.LOADING })
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then((response) => {
                this.setState({
                    beers: response.data,
                    status: STATUS.LOADED
                })
            })
            .catch((error) => {
                this.setState({
                    error: error,
                    status: STATUS.ERROR
                })
            })
    }

    render() {

        const { beers, error, status } = this.state;

        switch (status) {
            case STATUS.LOADING:
                return <div>
                    <Nav />
                    <h1>LOADING</h1>
                </div>;
            case STATUS.LOADED:
                return <div>
                    <Nav />
                    {beers.map((beer, index) =>
                        <Link to={beer._id} key={index}>
                            <div>
                                <img src={beer.image_url}></img>
                             </div>
                                <div>
                                    <p>{beer.name}</p>
                                    <p>{beer.tagline}</p>
                                    <p>{beer.contributed_by}</p>
                                </div>
                        </Link>
                    )}
                </div>
                  case STATUS.ERROR:
                    return <div>
                        <Nav />
                        {error}</div>
            default:
                break;
        }

        return (
            <div>
                {this.status}
            </div>
        )
    }
}

export default AllBeers; 