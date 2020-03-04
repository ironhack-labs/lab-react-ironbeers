import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Home extends Component {
    render(){
        return(
            <div className="home-info">
                <div className="home-info-card">
                    <Link to="/allbeers">
                        <h3>All Beers</h3>
                    </Link>
                    <img alt="" src="./images/beers.png" />
                    <p>here goes a cool description</p>
                </div>
                <div className="home-info-card">
                    <Link to="/randombeer">
                        <h3>Random Beers</h3>
                    </Link>
                    <img alt="" src="./images/random-beer.png" />
                    <p>here goes a cool description</p>
                </div>
                <div className="home-info-card">
                    <Link to="/newbeer">
                        <h3>New Beer</h3>
                    </Link>
                    <img alt="" src="./images/new-beer.png" />
                    <p>here goes a cool description</p>
                </div>
            </div>
        )
    }
}

export default Home;