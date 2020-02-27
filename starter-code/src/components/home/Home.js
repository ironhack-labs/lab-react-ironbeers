import React from 'react';
import { Link } from 'react-router-dom'

const home = () => {

    return (
    <>
        <img src="../images/beers.png" alt="All bears"/><br></br>
        <Link to='/beers'>All Beers</Link>
        <p>cdjiojdsojdoicjsoidjciosjicojxwkpoekxpowkekx</p>
        <br></br>
        <img src="../images/random-beer.png" alt="Random Beer"/><br></br>
        <Link to='/random'>Random Beer</Link>
        <p>dwjeokokwopkdwpkedpowkepodkw</p>
        <br></br>
        <img src="../images/new-beer.png" alt="New Beer"/><br></br>
        <Link to='/new'>New Beer</Link>
        <p>dwodkweopekdowkdpokwepodkpwkepodkw</p>
        <br></br>
    </>
    )
}

export default home
