import React, { Component } from 'react';
import {Link} from 'react-router-dom'


export default class Beers extends Component {

    render() {
            return (
                <div className="Home">
                    <div className="AllBeers fit">
                        <Link to="/beers" className="beers">
                            <img alt='' src='/images/beers.png' className="w"></img>
                            <div className="w data">
                                <h1>All beers</h1>
                                <p>See all our beers</p>
                            </div>
                        </Link>
                    </div>
                    <div className="RandomBeer fit">
                        <Link to="/random-beer" className="beers">
                            <img alt='' src='/images/random-beer.png' className="w"></img>
                            <div className="w data">
                                <h1>Random beer</h1>
                                <p>If you don't know what beer you want</p>
                            </div>
                        </Link>
                    </div>
                    <div className="NewBeer fit">
                        <Link to="/new-beer" className="beers">
                            <img alt='' src='/images/new-beer.png' className="w"></img>
                            <div className="w data">
                                <h1>New beer</h1>
                                <p>Here we can create new beer</p>
                            </div>
                        </Link>
                    </div>
                </div>
            )


    }
}