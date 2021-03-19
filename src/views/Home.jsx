import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Welcome Home Dude</h1>
            <div>
                <img src="http://www.brandonsbbq.com/wp-content/uploads/2014/06/ALL-BOTTLED-BEERS.jpg" alt="" /><br />
                <b><Link to="/beers">Beers</Link><br /></b>
            </div>
            <div>
                <img src="http://www.brandonsbbq.com/wp-content/uploads/2014/06/Beers-On-Tap-4Up.jpg" alt="" /><br />
                <b><Link to="/random-beer">Random Beer</Link></b>
            </div>
            <div>
                <img src="https://k9h2z2w9.stackpathcdn.com/wp-content/uploads/Contemporary-Mexican-Beer-Brands-750x375.jpg" alt="" /><br />
                <b><Link to="/new-beer">New Beer</Link></b>
            </div>
        </div>
    )
}

export default Home
