import React from 'react';
import axios from 'axios';
import Beer from './Beer';
import Header from './Header';

export default class BeerDetails extends React.Component {

    state = {
        beer: null
    }

    getBeerData = () => {
        const beerCode = this.props.match.params.id;

        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerCode}`)
            .then(response => {
                // console.log(response.data);
                this.setState({
                    beer: response.data
                })
            })
            .catch(err => console.log(err));
    }

    componentDidMount() {
        this.getBeerData();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {

            this.getBeerData();
        }
    }


    render() {
        const beer = this.state.beer;
        if (!beer) return <h1>Loading...</h1>
        return (
            <>
                <Header />
                <Beer beer={beer} />
            </>
        )
    }
}