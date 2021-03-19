import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../Styles/HomePage.css';
import beers from '../assets/beers.png';
import randomBeer from '../assets/random-beer.png';
import newBeer from '../assets/new-beer.png';

export class HomePage extends Component {
    render() {
        return (
            <div className="homePage">
                <Link to="/beers">
                    <div className="sectionsHome">
                        <img src={beers} alt="image"/>
                        <h1>All Beers</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At nisi, sed iste omnis facilis repudiandae sint perspiciatis eligendi. Amet in architecto assumenda ducimus minus vel facere pariatur quam quaerat fugiat.</p>
                    </div>
                </Link>
                <Link to="/random-beer">
                    <div className="sectionsHome">
                        <img src={randomBeer} alt="image"/>
                        <h1>All Beers</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At nisi, sed iste omnis facilis repudiandae sint perspiciatis eligendi. Amet in architecto assumenda ducimus minus vel facere pariatur quam quaerat fugiat.</p>
                    </div>
                </Link>
                <Link to="/new-beer">
                    <div className="sectionsHome">
                        <img src={newBeer} alt="image"/>
                        <h1>All Beers</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At nisi, sed iste omnis facilis repudiandae sint perspiciatis eligendi. Amet in architecto assumenda ducimus minus vel facere pariatur quam quaerat fugiat.</p>
                    </div>
                </Link>
            </div>
        )
    }
}

export default HomePage
