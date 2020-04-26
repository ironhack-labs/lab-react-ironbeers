import React, { Component } from 'react';
import axios from 'axios';
import BeerInList from './BeerInList';
import './Beers.css';

class Beers extends Component {
    constructor(){
        super()
        this.state = {
            beers: [],
            search: ''
        }
    }

    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then(response => {
            this.setState({
                beers: response.data
            });
        })
    }

    handleSearch = (e) => {
        const value = e.target.value;
        
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${e.target.value}`)
        .then(response => {
            this.setState({
                search: value,
                beers: response.data
            });
        })
    }

    render() {
        const { beers, search } = this.state; 

        return (
            <div className='Beers'>
                <input className='Beers-search' id='search' name='search' type='text' value={search} onChange={this.handleSearch} placeholder='Search'></input>
                <ul className='Beers-ul'>
                    {beers.map((beer, index) => (
                        <li className='Beers-li' key={index}>
                            <BeerInList beer={beer} />
                            <hr className='Beers-hr'></hr>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Beers;