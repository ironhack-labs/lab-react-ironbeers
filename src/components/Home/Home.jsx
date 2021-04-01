import React from 'react'
import { Link } from 'react-router-dom'
import beersImg from '../../assets/beers.png'
import newBeerImg from '../../assets/new-beer.png'
import randomBeerImg from '../../assets/random-beer.png'
import './Home.css'

const Home = (props) => {
    return (
        <div className="Home container mt-5">

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 mt-4">
                <div className="col mb-3">
                    <Link to="/beers" className="card">
                        <img src={beersImg} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title">All Beers</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </Link>
                </div>
                <div className="col mb-3">
                    <Link to="/random-beer" className="card">
                        <img src={randomBeerImg} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title">Random Beer</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </Link>
                </div>
                <div className="col mb-3">
                    <Link to="/new-beer" className="card">
                        <img src={newBeerImg} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title">New Beer</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Home
