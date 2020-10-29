import React from 'react'

import { Link } from 'react-router-dom'

import allbeers from './allbeers.jpg'
import newbeer from './newbeer.jpg'
import randombeer from './randombeer.jpg'

const home = () => {
    return (
        <div className='fluid-container'>
            <Link to="/allbeers" className='row home-card'>
                <img src={allbeers} alt="Beer Taps" />
            </Link>
                <h3>All Beers</h3>
                <p>Lorem ipsum dolor amet mustache knausgaard +1, blue bottle waistcoat tbh semiotics artisan synth stumptown gastropub cornhole celiac swag.</p>
            <Link to="/randombeer" className='row home-card'>
                <img src={randombeer} alt="Beer Tap" />
            </Link>
                <h3>Random Beer</h3>
                <p>Lorem ipsum dolor amet mustache knausgaard +1, blue bottle waistcoat tbh semiotics artisan synth stumptown gastropub cornhole celiac swag.</p>
            <Link to="/newbeer" className='row home-card'>
                <img src={newbeer} alt="Beer Bottle" />
            </Link>
                <h3>New Beer</h3>
                <p>Lorem ipsum dolor amet mustache knausgaard +1, blue bottle waistcoat tbh semiotics artisan synth stumptown gastropub cornhole celiac swag.</p>

        </div>
    )


}

export default home