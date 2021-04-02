import React, { Component } from 'react';
import { getAllBeers } from '../services/BaseService';
import { searchBeer } from '../services/BaseService';
import SyncLoader from 'react-spinners/SyncLoader';
import SingleBeer from './SingleBeer';
// import SearchBeer from './SearchBeer';

class Beers extends Component {
    state = {
        beers: [],
        loading: true,
        search: '',
    }

    componentDidMount() {
        getAllBeers()
            .then(beers => this.setState({beers, loading: false}))
            .catch(err => console.log(err))
    }

    onSearch = async (e) => {

        await this.setState({ 
            search: e.target.value 
        });

        searchBeer(this.state.search)
            .then(foundBeers => this.setState({beers: foundBeers}))
            .catch(err => console.log(err));


        console.log('this.state.search', this.state.search);
    };

    render() {
        const { beers, loading } = this.state
        
        return (
            <div className='Beers my-3'>
                {
                    loading
                    ? (
                        <div className="text-center">
                            <SyncLoader color="#3ec4fc"  />
                        </div>
                    )
                    : (
                        <div className="m-3">
                            {/* <SearchBeer searchBeer={this.onSearch} /> */}
                            <div className="SearchBeer">
                                <form>
                                    <div className="form-group">
                                        <input
                                            type="search" className="form-control mb-2" name="search__beer"
                                            id="search__beer" placeholder="Search beer..." autoComplete="off"
                                            onChange={this.onSearch} value={this.state.search}
                                        />
                                    </div>
                                </form>
                            </div>

                            <div className="row row-cols-1 row-cols-md-2 g-4 d-flex">

                                {beers.map(beer => (
                                    <div className="flex-row flex-wrap" key={beer._id}>
                                        <SingleBeer {...beer} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Beers;