import React, { Component } from 'react';
import { getBeers, searchBeer } from '../service/BaseService';
import PacmanLoader from "react-spinners/PacmanLoader";
import BeersItem from './BeersItem';

class Beers extends Component {

    state = {
        beers: [],
        loading: true,
        search: ""
    }

    componentDidMount() {
        getBeers()
            .then(beers => {
                this.setState({ beers, loading: false })
            })
            .catch(() => console.log('error'))
    }

    onChange = (e) => {
        this.setState({search: e.target.value})
        searchBeer(this.state.search)
            .then((response) => this.setState({beers: response}))
    }

    render() {
        const { beers, loading, search } = this.state

        return (
            <div className="Beers">
                <div className="container">
                    <div className="mb-3 mt-3">
                        <input type="text" className="form-control" placeholder="Beer..."  aria-describedby="basic-addon1" id="beer" name="beer" value={search} onChange={this.onChange}/>
                    </div>
                    {
                        loading
                            ?
                            (
                                <div className="text-center" >
                                    <PacmanLoader color="yellow" />
                                </div>
                            )
                            :
                            (
                                <div className="card mb-3 mt-3" style={{ border: 'none' }}>
                                    {beers.map(beer => (
                                        <div className="row g-0" key={beer._id} style={{ border: '1px solid #D7D7D7' }}>
                                            <BeersItem {...beer} />
                                        </div>
                                    ))}
                                </div>
                            )
                    }
                </div>
            </div>
        );
    }
}

export default Beers;