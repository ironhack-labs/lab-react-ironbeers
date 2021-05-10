import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <section>
                    <img src="/images/beers.png" alt="beers"/>
                    <Link to={'/beers'}><h1>All Beers</h1></Link>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsam debitis saepe quos aliquam pariatur dolorum corporis facere!</p>
                </section>
                <section>
                    <img src="/images/random-beer.png" alt="random beer" />
                    <Link to={'/random-beer'}><h1>Random Beer</h1></Link>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsam debitis saepe quos aliquam pariatur dolorum corporis facere!</p>
                </section>
                <section>
                    <img src="/images/new-beer.png" alt="new beer" />
                    <Link to={'/new-beer'}><h1>New Beer</h1></Link>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsam debitis saepe quos aliquam pariatur dolorum corporis facere!</p>
                </section>
            </div>
        )
    }
}
