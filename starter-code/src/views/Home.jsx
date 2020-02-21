import React from 'react';
import { Link } from "react-router-dom";


export default function Home() {
    return (
        <div id="homepage">
            <Link to="/beers">
            <img src='././images/beers.png' />
            <h1>All Beers</h1>
            </Link>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <Link to="/randombeer">
            <img src='././images/random-beer.png' />
            <h1>Random Beers</h1>
            </Link>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <Link to="/newbeer">
            <img src='././images/new-beer.png' />
            <h1>New Beer</h1>
            </Link>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
    )
}
