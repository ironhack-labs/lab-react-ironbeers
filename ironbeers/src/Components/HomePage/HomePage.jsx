import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css"

export default class HomePage extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="HomePage">
                    <div>
                    That babel-loader error🙄
                    </div>
                    <div>
                        <Link to="/beers">All beers</Link>
                    </div>
                    <div>
                        <Link to="/beers/random">Random Beer</Link>
                    </div>
                    <div>
                        <Link to="/beers/new">New Beer</Link>
                    </div>
                </div>
            </React.Fragment>

        )
    }
}