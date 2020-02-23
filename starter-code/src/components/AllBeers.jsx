import React, { Component } from 'react'
import Navbar from './Navbar'
import axios from "axios";
import { Link } from "react-router-dom";

export default class AllBeers extends Component {

    state = {
        beers: [],
        url: "https://ih-beers-api2.herokuapp.com/beers"
    };

    componentDidMount() {
        axios
            .get(this.state.url)
            // .then(apiRes => console.log(apiRes.data))
            .then(apiRes => this.setState({beers:apiRes.data}))
            .catch(apiErr => console.error(apiErr))
        }

    render() {
        return this.state.beers.length ? (
            <div>
                <Navbar/>
                <div className="all-beers">
                    {this.state.beers.map((b, i) => (
                        <Link to={`/beer/${b._id}`}>
                        <div className="box-beer" key={i}>
                            <div className="img-beer">
                                <img src={b.image_url}/>
                            </div>
                            <div className="beer-info">
                                <ul>
                                    <li>{b.name}</li>
                                    <li>{b.tagline}</li>
                                    <li>Created by : <br/>{b.contributed_by}</li>
                                </ul>
                            </div>
                         </div>
                        </Link>
                    ))}
                </div>

            </div>
        ) : (
            <p>no beers found</p>
        )
    }
}
