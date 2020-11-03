import React from 'react'
import BeerImage from '../alcoholic-beverages.jpg'
import {Link} from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <div className='home-box'>
                <img src={BeerImage} alt='beer' /> 
               <Link to='/beers' style={{ textDecoration: 'none' }}> <h1>All Beers</h1></Link>
            </div>

            <div className='home-box'>
                <img src={BeerImage} alt='beer' /> 
                <Link to='/random-beer' style={{ textDecoration: 'none' }}><h1>Random Beer</h1></Link>
            </div>

            <div className='home-box'>
                <img src={BeerImage} alt='beer' /> 
                <Link to='/new-beer' style={{ textDecoration: 'none' }}><h1>New Beer</h1></Link>
            </div>
        </div>
    )
}

