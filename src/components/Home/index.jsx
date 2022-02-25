import React from "react";
import './Home.css';
import { Link } from "react-router-dom";
import beerImg from "../../assets/beers.png";
import randomImg from "../../assets/random-beer.png";
import newBeerImg from "../../assets/new-beer.png";

const Home = () => {
    return (
        <div className="home">
            <Link to="/beers">
                <div className="beers">
                    <img src={beerImg} alt="beers" />
                    <h1>All Beers</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit placeat nostrum minus eveniet ad perferendis animi facilis iusto quos, quisquam dignissimos nesciunt unde, dolor nam temporibus veritatis iure numquam et?
                    </p>
                </div>
            </Link>
            <Link to="/random-beer">
                <div className="beers">
                    <img src={randomImg} alt="randombeer" />
                    <h1>Random Beer</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt esse aliquam eum commodi ipsa, exercitationem quod illum minima voluptatibus id eos doloremque quibusdam dignissimos nostrum sapiente ratione officiis fugiat assumenda!</p>
                </div>
            </Link>
            <Link to="/new-beer">
                <div className="beers">
                    <img src={newBeerImg} alt="newbeer" />
                    <h1>New Beer</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum quod cupiditate distinctio quos ut nobis mollitia, iste nam dignissimos accusantium laborum rerum consequatur, asperiores eligendi aperiam porro dolore veritatis corrupti!                    </p>
                </div>
            </Link>
        </div>
    );
}
export default Home