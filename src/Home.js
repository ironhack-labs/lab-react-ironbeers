import React from 'react';
import beers from './assets/beers.png';
import randomBeer from './assets/random-beer.png';
import newBeer from './assets/new-beer.png';
import { Link } from 'react-router-dom';

const Home = props => {
    return (
        <div className="Home">
            <div className="HomeSection">
                <img src={beers}/>
                <Link to="/beers"><h3>All Beers</h3></Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt aspernatur, dicta illum iusto aut qui delectus animi numquam at vitae.</p>
            </div>
            <div className="HomeSection">
                <img src={randomBeer}/>
                <Link to="/random-beer"><h3>Random Beer</h3></Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt aspernatur, dicta illum iusto aut qui delectus animi numquam at vitae.</p>
            </div>
            <div className="HomeSection">
                <img src={newBeer}/>
                <Link to="/new-beer"><h3>New Beer</h3></Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt aspernatur, dicta illum iusto aut qui delectus animi numquam at vitae.</p>
            </div>
        </div>
    )
}

export default Home;
