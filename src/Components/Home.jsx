import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../Styles/Home.css'


export class Home extends Component {
    
    render() {
        return (
            <div className="Home">
                    <section>
                        <Link exact to="/beers" className="Menu">
                            <img src="/assets/beers.png" alt="all beers" />
                            <h2>All Beers</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sapien velit, 
                                eleifend sit amet dui eu, ultrices bibendum nulla.
                            </p>
                        </Link>
                    </section>
                    <section>
                        <Link exact to="/random-beer" className="Menu">
                        <img src="/assets/random-beer.png" alt="all beers" />
                            <h2>Random</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sapien velit, 
                                eleifend sit amet dui eu, ultrices bibendum nulla.
                            </p>
                        </Link>
                    </section>
                    <section>
                        <Link exact to="/new-beer" className="Menu">
                        <img src="/assets/new-beer.png" alt="all beers" />
                            <h2>New Beer</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sapien velit, 
                                eleifend sit amet dui eu, ultrices bibendum nulla.
                            </p>
                        </Link>
                    </section>
            </div>
        )
    }
}

export default Home
