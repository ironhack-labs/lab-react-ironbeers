import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Beers extends Component {
    constructor() {
        super()
        this.state = { beers: [] }
    }

    componentDidMount() {
        axios.get("https://ironbeer-api.herokuapp.com/beers/all")
            .then(response => {
                this.setState({ beers: response.data })
            })
    }


    render() {

        return (
            <div className="">
                <h3 className='all-beers-title'>All beers, in here</h3>
                {this.state.beers.map((a, i) => {
                    return (
                        <div className='row' key={i}>
                            <div className='col-3'>
                                <ul className="list-group list-group-flush">
                                    <Link to={`/beers/${a._id}`} className="list-group-item beer-title" >{a.name}</Link>
                                </ul>
                            </div>
                            <div className='col-3'>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">{a.tagline}</li>
                                </ul>
                            </div>
                            <div className='col-6'>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item desc">{a.description}</li>
                                </ul>
                            </div>
                        </div>

                    )
                })}
            </div>
        );
    }
}

export default Beers;
