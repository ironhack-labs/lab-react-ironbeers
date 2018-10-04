import React from 'react';
import Header from '../components/Header';
import BeerCard from '../components/BeerCard';
import axios from 'axios';

export default class BeerList extends React.Component {
    constructor() {
        super();
        this.state = {
            beerList: []
        }
    }

    componentWillMount() {
        // console.log('entró')
        this.fetchBeers();
    }

    fetchBeers(){
        // console.log('entró')
        axios.get('https://ironbeer-api.herokuapp.com/beers/all')
        // .then(arr => console.log(arr.data))
        .then(arr => this.setState({beerList: arr.data}))
        .catch(e => console.log(e));
    };

    render() {
        // console.log(this.state.beerList)
        return(
            <div>
                <Header></Header>
                {this.state.beerList.map(beer => <BeerCard {...beer} key={beer._id}></BeerCard>)}
            </div>
        )
    }
}