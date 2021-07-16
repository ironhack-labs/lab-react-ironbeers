import React, { Component } from 'react'
import randomBeerImg from "../assets/random-beer.png"
import allBeerImg from "../assets/beers.png"
import newBeerImg from "../assets/new-beer.png"
import {Link} from  'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div>
                 <div className="card-group">
                    <Link to="/beers" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                        <div className="card" style={{ maxWidth: 600 }}>
                            <img src={allBeerImg}  className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">All Beers</h5>
                            </div>
                        </div>
                    </Link>
                    <Link to="/random-beer" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                        <div className="card" style={{ maxWidth: 600 }}>
                            <img src={randomBeerImg} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Random Beer</h5>
                            </div>
                        </div>
                    </Link>
                    <Link to="/new-beer" style={{ color: 'inherit', textDecoration: 'inherit'}}> 
                        <div className="card" style={{ maxWidth: 600 }}>
                            <img src={newBeerImg} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">New Beer</h5>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Home;