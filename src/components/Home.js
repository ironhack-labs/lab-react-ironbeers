import React from 'react';
import {Link} from 'react-router-dom'



export default function Home() {
    return(
        <div>
            <Link to='/all-beers'>All Beers</Link>
            <br></br>
            <Link to='/random-beer'>Random Beer</Link>
            <br></br>
            <Link to='/new-beer'>New Beer</Link>
        </div>
    )
}