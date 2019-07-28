import React, { Component, Fragment } from 'react';
import Header from './Header';
import axios from 'axios';

import BeerCard from './BeerCard';
import BeerModal from './BeerModal';
import SearchBar from './SearchBar';
import Loader from './Loader';

class Beers extends Component {
    state = {
        data: [],
        beers: [],
        beer: null,
        loader: true,
        searchText: ''
    }

    componentDidMount() {
        axios.get('https://sample-api-ih.herokuapp.com/')
        .then( res => {
            if(this.props.match.params.id) {
                const beer = res.data.find( (el) => el._id === this.props.match.params.id)
                this.setState({
                    data: res.data,
                    beers: res.data,
                    beer,
                    loader: false
                })
            } else {
                this.setState({
                    data: res.data,
                    beers: res.data,
                    loader: false
                })
            }
        })
        .catch( err => {
            console.log(err)
        })
    }

    renderBeers = () => {
        return this.state.beers.map( (beer, index) => {
            return (
                <BeerCard key={index} beer={beer} showBeerModal={this.showBeerModal} />
            )
        })
    }

    goToBeersRoute = () => {
        this.setState({
            beer: null
        })
    }

    showBeerModal = (beer) => {
        this.setState({
            beer
        })
    }

    handleSearchText = (ev) => {
        const text = ev.target.value;
        const filteredBeers = this.state.data.filter( beer => {
            return beer.name.toUpperCase().includes(text.toUpperCase())
        })

        this.setState({
            searchText: text,
            beers: filteredBeers
        })
    }

    render() {
        return(
            <Fragment>
                <Header />
                <SearchBar searchText={this.state.searchText} handleSearchText={this.handleSearchText} />
                <div className="container">
                    <div className="row">
                        {
                            this.state.loader ?
                            <Loader />
                            :
                            this.renderBeers()
                        }
                    </div>
                    {
                        this.state.beer &&
                        <BeerModal {...this.state.beer} goToBeersRoute={this.goToBeersRoute} />
                    }
                </div>
            </Fragment>
        )
    }
}

export default Beers;
