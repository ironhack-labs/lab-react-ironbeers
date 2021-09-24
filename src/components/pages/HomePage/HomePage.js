import React from 'react'
import { Link } from 'react-router-dom'
import allBeer from '../../../assets/beers.png'
import RandomBeer from '../../../assets/random-beer.png'
import NewBeer from '../../../assets/new-beer.png'


export default function HomePage() {


    return (
        <div>

            <img src={allBeer} alt='xd' />
            <Link to="/beers">
                <h1> All Beers </h1>
            </Link>
            <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>

            <img src={RandomBeer} alt='xd' />
            <Link to="/random-beer">
                <h1> Random Beer </h1>
            </Link>
            <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
            </p>

            <img src={NewBeer} alt='xd' />
            <Link to="/beers:id">
                <h1> New Beer </h1>
            </Link>
            <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
            </p>

        </div>
    )
}