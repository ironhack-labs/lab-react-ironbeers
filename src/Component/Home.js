import React from 'react';
import '../App.css';
import beersImg from '.././assets/beers.png';
import randomBeerImg from '.././assets/random-beer.png';
import newBeersImg from '.././assets/new-beer.png';
import { Link } from "react-router-dom";



function Home () {
    return (
        <div className="container">
            <div className="allbeers">
                <img src={beersImg} alt="allbeer" />
                <h1><Link to="/beerslist">All Beers</Link></h1>
                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
            </div>
            <div className="randombeers">
                <img src={randomBeerImg} alt="randomBeerImg" />
                <h1><Link to="/randombeer">Random Beer</Link></h1>
                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
            </div>
            <div className="newbeers">
                <img src={newBeersImg} alt="newBeersImg" />
                <h1><Link to="/newbeer">New Beer</Link></h1>
                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
            </div>
        </div>
    )
}

export default Home