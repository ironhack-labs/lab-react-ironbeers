import React from 'react';
import { Link } from 'react-router-dom';
const axios = require('axios');

class AllBeers extends React.Component {
    state = {
        allBeers: []
    }

    componentDidMount = () => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then( response => {
                console.log(response.data[0])
                this.setState({ allBeers: response.data })
            })
    }


    render() {

        if (!this.state.allBeers.length) {
            return <div>Loading...</div>
        } 

        return (
            <div className="row list-group">

                { this.state.allBeers.map(b => {
                    return (
                        <div className="col-12 list-group-item">
                                <div className="row text-left p-3">
                                    <div className="col-4 text-center">
                                        <Link to={"/beers/" + b._id }>
                                            <img style={{height: '150px'}} src={b.image_url} alt="beer"/>
                                        </Link>
                                    </div>
                                    <div className="col-8 m-auto">
                                        <Link to={"/beers/" + b._id }>
                                            <h4 className="text-dark">{b.name}</h4>
                                        </Link>
                                        <h5 className="text-secondary">{b.tagline}</h5>
                                        <p className="text-dark"><b>Created by:</b> {b.contributed_by}</p>
                                    </div>
                                </div>
                           
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default AllBeers;