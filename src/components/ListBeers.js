import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from './NavBar';

class ListBeers extends React.Component {

    state = {
        beers: [],
        loading: true,
        searchTerm: "",
        timeoutID: 0
    };

    componentDidMount() {
        axios
            .get('https://ih-beers-api2.herokuapp.com/beers')
            .then(resp => {
                this.setState({
                    beers: resp.data,
                    loading: false
                });
            });
    }

    editSearchTerm = (event) => {
        const newSearchTerm = event.currentTarget.value;
        this.setState({ searchTerm: newSearchTerm, loading: true }, () => {

            clearTimeout(this.state.timeoutID);

            const newTimeoutID = window.setTimeout(() => axios
                .get('https://ih-beers-api2.herokuapp.com/beers/search', {
                    params: { q: newSearchTerm }
                })
                .then(resp => {
                    this.setState({
                        beers: resp.data,
                        loading: false
                    });
                }), 300);

            this.setState({ timeoutID: newTimeoutID });
        });
    }

    render() {
        return (
            <div>
                <Navbar />
                {/* Bootstrap spinner */}
                {this.state.loading && (<div className="spinner-border text-light" role="status">
                    <span className="sr-only">Loading...</span>
                </div>)}

                <input type='text' value={this.state.searchTerm} onChange={this.editSearchTerm} className='form-control input-field' placeholder='Search beers...'></input>

                {this.state.beers.map((beer, key) => {
                    return (
                        <Link to={'/beers/' + beer._id} key={beer._id} className='beer-box'>
                            <div>
                                <img src={beer.image_url} alt='featured beer' className='small-beer-picture' />
                            </div>
                            <div>
                                <h3>{beer.name}</h3>
                                <p>{beer.tagline}</p>
                                <p>Created by: {beer.contributed_by}</p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        );
    }
}

export default ListBeers;