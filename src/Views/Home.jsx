import React from 'react';
import { Link } from 'react-router-dom';

import beersImg from './../assets/beers.png';
import randomBeerImg from './../assets/random-beer.png';
import newBeerImg from './../assets/new-beer.png';

class Home extends React.Component {

    render() {
        return (
            <div className="Home">
                <img src={beersImg} alt="beers"/>
                <Link to="/beers" className="link">All beers</Link>
                <p>Come and check our pretty beers 🚀</p>

                <img src={randomBeerImg} alt="beers"/>
                <Link to="/randombeer" className="link">Random beer</Link>
                <p>Wanna discover a random beer? 🕵🏻‍♀️</p>

                <img src={newBeerImg} alt="beers"/>
                <Link to="/newbeer" className="link">New beer</Link>
                <p>Let's be crazy, create a new beer! 🍻</p>
            </div>
        )
    }
}

export default Home
