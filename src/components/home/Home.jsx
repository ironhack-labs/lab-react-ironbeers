import React from 'react'
import imgBeerTaps from './beer-taps.jpg'
import imgRandomBeer from './random-beer.jpg'
import imgBeer from './beer.jpg'
import { Link } from 'react-router-dom'

export default function Home() {

    return (
        <div className="card-deck mt-5 mx-5" >
            <Link to='/beer/beers' className='card text-decoration-none text-muted' >
                <article >
                <img className='card-img-top' src={imgBeerTaps} alt=''></img>
                <h2 className='card-title mx-3 my-4 text-dark'>All Beers</h2>
                <p className='card-text mx-3 my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit luctus ullamcorper. In mattis pharetra mauris quis tristique. Curabitur ut risus sit amet nunc suscipit fringilla. </p>
                </article>
            </Link>

            <Link to='/beer/random-beer' className='card  text-decoration-none text-muted' >
                <article >
                <img className='card-img-top' src={imgRandomBeer} alt=''></img>
                <h2 className='card-title mx-3 my-4 text-dark' >Random Beer</h2>
                <p className='card-text mx-3 my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit luctus ullamcorper. In mattis pharetra mauris quis tristique. Curabitur ut risus sit amet nunc suscipit fringilla. </p>
                </article>
            </Link>

            <Link to='/beer/new-beer' className='card  text-decoration-none text-muted' >
                <article >
                <img className='card-img-top' src={imgBeer} alt=''></img>
                <h2 className='card-title mx-3 my-4 text-dark'>New Beer</h2>
                <p className='card-text mx-3 my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit luctus ullamcorper. In mattis pharetra mauris quis tristique. Curabitur ut risus sit amet nunc suscipit fringilla. </p>
                </article>
            </Link>
        </div>
    )
}
