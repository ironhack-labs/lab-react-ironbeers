import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Beers from '../../assets/beers.png';
import NewBeers from '../../assets/new-beer.png';
import RandomBeers from '../../assets/random-beer.png';


const Home = () => {

    return (
        <div className="">
            <div className="card" style={{width: "18rem"}}>
                <img src={Beers} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>

            <div className="card" style={{width: "18rem"}}>
                <img src={NewBeers} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>

            <div className="card" style={{width: "18rem"}}>
                <img src={RandomBeers} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>


        </div>
    )


}

export default Home;