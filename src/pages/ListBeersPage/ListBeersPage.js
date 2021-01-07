import React, { Component } from 'react'
import Header from '../../components/Header'
import axios from 'axios';
import BeerItem from './component/BeerItem';
import './ListBeersPage.css'
import { Link } from 'react-router-dom';
import Search from './component/Search';

export default class ListBeersPage extends Component {
        state = {
                listBeers: [],
                searchValue: ''
        }

        handleSearch = (searchValue) => {
                this.setState({ searchValue })

        }

        componentDidUpdate() {
                axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${this.state.searchValue}`)
                        .then(list => this.setState({ listBeers: list.data }))
                        .catch(err => console.log(err))
        }
        componentDidMount() {

                axios.get('https://ih-beers-api2.herokuapp.com/beers')
                        .then(list => this.setState({ listBeers: list.data }))
                        .catch(err => console.log(err))
        }

        render() {

                if (this.state.listBeers.length === 0) {
                        return <p>LOADING....</p>
                }
                return (
                        <div className='page'>
                                <Header />

                                <Search onChange={this.handleSearch} />

                                <div className='list-beers'>
                                        {this.state.listBeers.map((beer, id) => {
                                                return (
                                                        <Link to={`/${beer._id}`} key={id}>
                                                                <BeerItem
                                                                        image_url={beer.image_url}
                                                                        name={beer.name}
                                                                        tagline={beer.tagline}
                                                                        contributed_by={beer.contributed_by}
                                                                />
                                                        </Link>

                                                )
                                        })}
                                </div>
                        </div>
                )
        }
}
