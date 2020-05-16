import React, { Component } from 'react';
import axios from 'axios';
import BeerCard from './BeerCard';

class Beers extends Component {
    constructor(props) {
        super(props);
        this.state={
            beers:[]
        };
    }
    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then(response => {
            this.setState({beers:response.data})
        })
    }

    inputHandler=(e) => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${e.target.value}`)
            .then(response => {
                this.setState({beers:response.data})
            })
    }

    render() {
        return (
            <div className='container'>
                <div className='form-group'>
                    <label>Search for the beer</label>
                    <input type="text" className='form-control' onChange={(e)=>this.inputHandler(e)}/>
                </div>
                <div className='row'>
                {this.state.beers.map(beer=><BeerCard key={beer._id} {...beer}/>)}
                </div>   
            </div>
        );
    }
}

export default Beers;