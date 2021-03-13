import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import beersImg from '../../assets/beers.png';
import randomBeerImg from '../../assets/random-beer.png';
import newBeerImg from '../../assets/new-beer.png';

export class Home extends Component {
    render() {
        return (
                <div className="card-group m-4">
                <div className="card m-2">
                    <img src={beersImg} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">All Beers</h5>
                            <p className="card-text">He’s a sensitive kid. Lonnie used to say he was queer. Called him a fag. Is he? He’s missing, is what he is! Why do we even need weapons anyway? We have her.</p>
                            <Link to="/beers" className="stretched-link"></Link>
                        </div>
                    </div>

                    <div className="card m-2">
                    <img src={randomBeerImg} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Random Beer</h5>
                            <p className="card-text">Bitchin' Just wait till we tell Will that Jennifer Hayes was crying at his funeral. I need my paddles! Nancy, seriously, you're gonna be so cool now, it's ridiculous.</p>
                            <Link to="/random-beer" className="stretched-link"></Link>
                        </div>
                    </div>

                    <div className="card m-2">
                    <img src={newBeerImg} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">New Beer</h5>
                            <p className="card-text">You’re going to take out the demigorgon with a slingshot? Mouth-breather. If anyone asks where I am, I've left the country. If anyone asks where I am, I've left the country..</p>
                            <Link to="/new-beer" className="stretched-link"></Link>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Home
