import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'


const Home = () => {
    return ( 
        <div>	
            <Link to="/beers">All Beers</Link> 
            <Link to="/random">Get a random Beer</Link>
            <Link to="/createBeer">Create a new beer</Link>
				</div>
    )
}

export default Home