import React from 'react'
import BeerImage from '../alcoholic-beverages.jpg'
import {Link} from 'react-router-dom'
import { Route , Switch } from 'react-router-dom'
import Beers from './Beers'

export default function Home() {
    return (
        <div>
            <div className='home-box'>
                <img src={BeerImage} alt='beer' /> 
                <h1><Link to='/beers' style={{ textDecoration: 'none' }}>All Beers</Link></h1>
            </div>

            <div className='home-box'>
                <img src={BeerImage} alt='beer' /> 
                <h1><Link to='/random-beer' style={{ textDecoration: 'none' }}>Random Beer</Link></h1>
            </div>

            <div className='home-box'>
                <img src={BeerImage} alt='beer' /> 
                <h1><Link to='/new-beer' style={{ textDecoration: 'none' }}>New Beer</Link></h1>
            </div>
        </div>
    )
}

