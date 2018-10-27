import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="div-container-home">
            <div className="div-container">
                <img src="https://www.brasserielefebvre.be/wp/wp-content/uploads/2016/06/bieres_all-1024x424.png" alt="img-beer"></img>
                <Link to='/beers'>ALL BEERS</Link>
            </div>
            <div className="div-container">
                <img src="https://www.brasserielefebvre.be/wp/wp-content/uploads/2016/06/bieres_all-1024x424.png" alt="img-beer"></img>
                <Link to='/random-beer'>RANDOM BEER</Link>
            </div>
            <div className="div-container">
                <img src="https://www.brasserielefebvre.be/wp/wp-content/uploads/2016/06/bieres_all-1024x424.png" alt="img-beer"></img>
                <Link to='/new-beer'>NEW BEER</Link>
            </div>
        </div>

    )
}

export default Home;