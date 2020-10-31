import React from 'react'
import imgBeerTaps from './beer-taps.jpg'
import imgRandomBeer from './random-beer.jpg'
import imgBeer from './beer.jpg'
import { Link } from 'react-router-dom'

export default function Home() {

    return (
        <div>
            <Link to='/beer/beers' className='cards-home' >
                <article >
                <img src={imgBeerTaps} alt=''></img>
                <h2>All Beers</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit luctus ullamcorper. In mattis pharetra mauris quis tristique. Curabitur ut risus sit amet nunc suscipit fringilla. </p>
                </article>
            </Link>

            <Link to='/beer/random-beer' className='cards-home' >
                <article >
                <img src={imgRandomBeer} alt=''></img>
                <h2>Random Beer</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit luctus ullamcorper. In mattis pharetra mauris quis tristique. Curabitur ut risus sit amet nunc suscipit fringilla. </p>
                </article>
            </Link>

            <Link to='/beer/new-beer' className='cards-home' >
                <article >
                <img src={imgBeer} alt=''></img>
                <h2>New Beer</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit luctus ullamcorper. In mattis pharetra mauris quis tristique. Curabitur ut risus sit amet nunc suscipit fringilla. </p>
                </article>
            </Link>
        </div>
    )
}
