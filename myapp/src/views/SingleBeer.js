import React from 'react';
import Header from '../components/Header';
import BeerDetail from '../components/BeerDetail';
import axios from 'axios';

export default class SingleBeer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            beer: {},
            random: props.random || false
        }
    };

    componentWillMount() {
        this.state.random ? this.fetchRandom() : this.fetchBeer();
    };

    fetchBeer() {
        // console.log(this.props.match.params.id)
        axios.get(`https://ironbeer-api.herokuapp.com/beers/single/${this.props.match.params.id}`)
        .then(beer => this.setState({beer: beer.data}))
        .catch(e => console.log(e))
    }

    fetchRandom() {
        axios.get('https://ironbeer-api.herokuapp.com/beers/random')
        .then(beer => this.setState({beer: beer.data[0]}))
        .catch(e => console.log(e))
    }

    render() {
        // console.log(this.state.beer)
        return(
            <div>
                <Header></Header>
                <BeerDetail beer={this.state.beer}></BeerDetail>
            </div>
        )
    }
}