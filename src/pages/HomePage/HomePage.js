import React from "react";
import { Link } from "react-router-dom";
import styles from "./HomePage.css"
import BeerBannerImg from '../../assets/beers.png';
import RandomBannerImg from '../../assets/random-beer.png';
import NewBannerImg from '../../assets/new-beer.png';

function HomePage() {
    return ( 
        <div>
            <Link to="/beers" >
            <div className="home-card">
                <img src={BeerBannerImg} alt="" />
                <h2>All Beers</h2>
                <p>Tootsie roll jelly-o fruitcake brownie jujubes topping ice cream jujubes wafer. Pudding lemon drops donut gummi bears cheesecake chocolate soufflé. Chupa chups wafer toffee tart pudding chocolate gingerbread sweet gingerbread. Marshmallow bonbon tootsie roll cupcake chocolate liquorice donut cake.</p>
            </div>
            </Link>

            <Link to="beers/random" >
            <div className="home-card">
                <img src={RandomBannerImg} alt="" />
                <h2>Random Beer</h2>
                <p>Tootsie roll jelly-o fruitcake brownie jujubes topping ice cream jujubes wafer. Pudding lemon drops donut gummi bears cheesecake chocolate soufflé. Chupa chups wafer toffee tart pudding chocolate gingerbread sweet gingerbread. Marshmallow bonbon tootsie roll cupcake chocolate liquorice donut cake.</p>
            </div>
            </Link>

            <Link to="/add-beer" >
            <div className="home-card">
                <img src={NewBannerImg} alt="" />
                <h2>New Beer</h2>
                <p>Tootsie roll jelly-o fruitcake brownie jujubes topping ice cream jujubes wafer. Pudding lemon drops donut gummi bears cheesecake chocolate soufflé. Chupa chups wafer toffee tart pudding chocolate gingerbread sweet gingerbread. Marshmallow bonbon tootsie roll cupcake chocolate liquorice donut cake.</p>
            </div>
            </Link>
        </div>
     );
}

export default HomePage;