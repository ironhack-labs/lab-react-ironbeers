import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

const views = () => {

    return (
        <div className="row">
            <div className='row'>
                <div className='col'>
                    <img className="card-img-top" src="./beer-card1.jpg" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">See all beers</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to='/beers' className='btn btn-primary'>All beers</Link>
                    </div>
                </div>
                <div className='col'>
                    <img className="card-img-top" src="./beer-card1.jpg" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Random Beer</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to='/random-beer' className='btn btn-primary'>Random Beer</Link>
                    </div>
                </div>
                <div className='col'>
                    <img className="card-img-top" src="./beer-card1.jpg" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Add a beer</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to='/add-beer' className='btn btn-primary'>Add Beer</Link>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default views;

//            <Link to='/'><img className='home-image' src='./home-icon.png' /></Link>
