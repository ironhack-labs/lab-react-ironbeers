import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <>
                <section className='d-flex justify-content-center row'>
                    <div className="card mb-3 mt-3" style={{ width: "90vw" }}>
                        <Link to={'/beers'}>
                        <img className="card-img-top" src="..//img/beers.png" alt="beers" />
                        <div className="card-body">
                            <h1 className="card-text">All Beers</h1>
                        </div>
                        </Link>
                    </div>
            
                    
                    <div className="card mb-3 mt-3" style={{ width: "90vw" }}>
                        <Link to={'/randombeer'}>
                        <img className="card-img-top" src="..//img/random-beer.png" alt="beers" />
                        <div className="card-body">
                        <h1 className="card-text">Random Beer</h1>
                        </div>
                        </Link>
                    </div>

                    <div className="card mb-3 mt-3" style={{ width: "90vw" }}>
                        <Link to={'/new'}>
                        <img className="card-img-top" src="..//img/new-beer.png" alt="beers" />
                        <div className="card-body">
                        <h1 className="card-text">New Beer</h1>
                        </div>
                        </Link>
                    </div>
                </section>
            </>
        )
    }
}


