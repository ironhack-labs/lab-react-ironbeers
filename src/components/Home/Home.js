import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

function Home() {
    return (
        <div className="Home">
            <div className="card style={{width: '18rem'}}">
                <img src="./img/beers.png" className="card-img-top" alt="Beers"/>
                <div className="card-body info">
                    <h5 className="card-title"><Link to='/beers' className="link-to">All Beers</Link></h5>
                    <p className="card-text">Lorem fistrum ese pedazo de mamaar benemeritaar tiene musho peligro condemor a peich ese hombree benemeritaar. </p>
                </div>
            </div>
            <div className="card style={{width: '18rem'}}">
                <img src="./img/random-beer.png" className="card-img-top" alt="Random-Beers"></img>
                <div className="card-body info">
                    <h5 className="card-title"><Link to='/random-beer' className="link-to">Random Beer</Link></h5>
                    <p className="card-text">Lorem fistrum ese pedazo de mamaar benemeritaar tiene musho peligro condemor a peich ese hombree benemeritaar. </p>
                </div>
            </div>
            <div className="card style={{width: '18rem'}}">
                <img src="./img/new-beer.png" className="card-img-top" alt="New-beer"></img>
                <div className="card-body info">
                    <h5 className="card-title"><Link to='/new-beer' className="link-to">New Beer</Link></h5>
                    <p className="card-text">Lorem fistrum ese pedazo de mamaar benemeritaar tiene musho peligro condemor a peich ese hombree benemeritaar. </p>
                </div>
            </div>
        </div>
    );
}

export default Home;