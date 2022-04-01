import React from "react";
import { Link } from 'react-router-dom';
import './Home.css';
import image1 from './../../assets/beers.png';
import image2 from './../../assets/random-beer.png';
import image3 from './../../assets/new-beer.png';

const Home = () => {
    return (
        <>
                <div className="all-beers home-div">
                    <img src={image1} alt="" />
                    <div className="container home-div-info">
                        <Link to="/beers"><h3 className="mt-3">All Beers</h3></Link>
                        <p className="mx-4 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed sapien sapien. Nullam non fermentum lectus, ultrices lobortis lorem. Fusce tempor id lorem sed porta.</p>
                    </div>
                </div>
            <div className="random-beer home-div">
                <img src={image2} alt="" />
                <div className="container home-div-info">
                    <h3 className="mt-3">Random Beer</h3>
                    <p className="mx-4 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed sapien sapien. Nullam non fermentum lectus, ultrices lobortis lorem. Fusce tempor id lorem sed porta.</p>
                </div>
            </div>
            <div className="new-beer home-div home-div-info">
                <img src={image3} alt="" />
                <div className="container">
                    <h3 className="mt-3">New Beer</h3>
                    <p className="mx-4 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed sapien sapien. Nullam non fermentum lectus, ultrices lobortis lorem. Fusce tempor id lorem sed porta.</p>
                </div>
            </div>
        </>
    );
};

export default Home;