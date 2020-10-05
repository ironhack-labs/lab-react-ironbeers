import React from 'react';
import Header from '../Header/Header';
import axios from 'axios';
import './AllBeers.css'
import { Link } from 'react-router-dom';
import Search from '../SearchBar/SearchBar'

class AllBeers extends React.Component {
    state = {
        beers: [],
        search: ''
    }

    componentDidMount() {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then(beers => {
            this.setState({ beers: [...new Set(beers.data)] })
            // console.log(beers.data.map(beer => beer.name))
        })
        .catch(err => console.log(err))
    }

    handleSearch(newValue) {
        this.setState({
        search: newValue,
        });
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${newValue}`)
        .then(response => {
            this.setState({
                beers: response.data
            })
        })

    };

    render() {
        return (
            <div>
                <Header />
                <Search search={this.state.search} handleSearch={this.handleSearch.bind(this)}/>
                    <div className='container'>
                        <div className='row cards-allbeers-container'>
                            {this.state.beers.map(beer => {
                                return (
                                    <div className="card m-3 d-flex " style={{ maxWidth: 540 }}>
                                        <div className="row no-gutters">
                                            <div className="col-md-3">
                                                <Link to={`/beers/${beer._id}`}>
                                                    <img src={`${beer.image_url}`} className="img-fluid mx-auto d-block" alt={`image of${beer.image_url} beer`} style={{ maxHeight: '200px' }} />
                                                </Link>
                                            </div>
                                            <div className="col-md-9">
                                                <div className="card-body">
                                                    <h2 className="card-title">{beer.name}</h2>
                                                    <h4 className="card-text text-muted">{beer.tagline}</h4>
                                                    <p className="card-text"><b>Created by: </b>{beer.contributed_by}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
            </div>

 
        );
    }
};

export default AllBeers; 