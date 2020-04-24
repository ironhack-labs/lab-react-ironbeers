import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Nav from './Nav'

const STATUS = {
    LOADING: 'LOADING',
    LOADED: 'LOADED',
    ERROR: 'ERROR'
}


class Home extends Component {
    constructor() {
        super()
        this.state = {
            beers: [],
            status: '',
        }
    }

    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then((response) => {
                console.log(response.data);
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
                    Loading</div>;
            case STATUS.LOADED:
                return <div>
                    <Nav />
                    {beers.map((beer, index) =>
                        <Link className='beer-home' to={beer._id} key={index}>
                            <img src={beer.image_url} alt='beer'></img>
                            <p>{beer.name}</p>
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

export default Home;