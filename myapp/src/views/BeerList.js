import React from 'react';
import Header from '../components/Header';
import BeerCard from '../components/BeerCard';
import axios from 'axios';

export default class BeerList extends React.Component {
    constructor() {
        super();
        this.state = {
            beerList: [],
        }
    }

    componentWillMount() {
        this.fetchBeers();
    }

    fetchBeers(){
        axios.get('https://ironbeer-api.herokuapp.com/beers/all')
        .then(arr => this.setState({beerList: arr.data}))
        .catch(e => console.log(e));
    };

    searchBeer = (input) => {
        if(this.state.input !== ""){
            axios.get(`https://ironbeer-api.herokuapp.com/beers/search?q=${input}`)
            .then(filter => this.setState({beerList: filter.data}))
            .catch(e => console.log(e))
        }
    }

    render() {
        return(
            <div>
                <Header></Header>
                <input type="text" name="search" onChange={e => this.searchBeer(e.currentTarget.value)}></input>
                {this.state.beerList.map(beer => <BeerCard {...beer} key={beer._id}></BeerCard>)}
            </div>
        )
    }
}