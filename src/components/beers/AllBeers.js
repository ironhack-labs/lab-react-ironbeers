import React, { Component, Fragment } from 'react';
import axios from 'axios';
import BeerCard from './BeerCard';
import Header from '../header/Header';
import Search from '../search/Search';
import Alert from '../layout/Alert';
import Spinner from '../layout/Spinner';


export default class AllBeers extends Component {
    constructor(props) {
        super(props)

        this.state = {
            beers: [],
            alert: null,
            loading: true
        }
    }



    componentDidMount() {
        this.getAllBeers();
    }
    getAllBeers = () => {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers`)
            .then(responseFromApi => {
                this.setState({ beers: responseFromApi.data, loading: false });
            });
    }
    getBeerCard = () => {
        const { beers } = this.state;

        return beers.map(oneBeer =>
            <BeerCard key={oneBeer._id} beer={oneBeer} />
        )


    }
    searchBeers = (text) => {

        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${text}`)
            .then(responseFromApi => {

                this.setState({ beers: responseFromApi.data, loading: false });
            });
    }
    setAlert = (msg, type) => {
        this.setState({ alert: { msg, type } });
        setTimeout(() => this.setState({ alert: null }), 3000);
    }

    render() {
        if (this.state.loading) return <Spinner />
        return (
            <Fragment>
                <Header />
                <div className='container mt-5 py-5'>
                    <Alert alert={this.state.alert} />
                    <Search searchBeers={this.searchBeers} setAlert={this.setAlert} />
                    {this.getBeerCard()}

                </div>
            </Fragment>
        )
    }
}
