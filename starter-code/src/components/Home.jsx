import React, { Component } from 'react'
import { Link } from "react-router-dom";


export default class Home extends Component {
    render() {
        return (
            <>
            <div className="box-wrapper">
                <Link to="/all-beers">
                <div className="box">
                    <div className="img">
                        <img src="./images/beers.png"/>
                    </div>

                    <div className="title-box">
                        <h2>All Beers</h2>
                    </div>

                    <div className="title-desc">
                        <p>Display the list of all the beers we have !</p>
                    </div>
                </div>
                </Link>

                <Link to="/random-beer">
                <div className="box">
                    <div className="img">
                        <img src="./images/random-beer.png"/>
                    </div>

                    <div className="title-box">
                        <h2>Random Beers</h2>
                    </div>

                    <div className="title-desc">
                        <p>Time to discover ! Get a random beer and learn from it !</p>
                    </div>
                </div>
                </Link>

                <Link to="/new-beer">
                <div className="box">
                    <div className="img">
                        <img src="./images/new-beer.png"/>
                    </div>

                        <div className="title-box">
                        <h2>New Beers</h2>
                    </div>

                    <div className="title-desc">
                    <p>New or special recipe ? Feed us !</p>
                    </div>
                </div>
                </Link>
            </div>
        </>
        );
    }
}
