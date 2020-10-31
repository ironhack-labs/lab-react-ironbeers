import React from 'react'
import {Link} from 'react-router-dom'
import HomeHeader from './HomeHeader'

function HomePage() {
    return (
        <div>
            <Link to="/beers" style={{textDecoration: 'none'}} >
                <HomeHeader image={'/images/allBeers.PNG'} title={'All Beers'}/>
            </Link>
            <Link to="/random-beer" style={{textDecoration: 'none'}} >
                <HomeHeader image={'/images/randombeer.PNG'} title={'Random Beer'}/>
            </Link>
            <Link to="/new-beer" style={{textDecoration: 'none'}} >
                <HomeHeader image={'/images/newBeer.PNG'} title={'Add a beer'}/>
            </Link>
        </div>
    )
}

export default HomePage
