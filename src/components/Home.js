import React from 'react'
import HomeCard from './HomeCard'

function Home() {
    return (
        <div className="row d-flex justify-content-center">
            <HomeCard title="All Beers" description="You will find a great variety of beers" img="/images/beers.jpeg" link="/beers" />
            <HomeCard title="Random Beer" description="You will find a random beer" img="/images/randomBeer.jpeg" link="/random-beer" />
            <HomeCard title="New Beer" description="Want to share a beer you like ?" img="/images/newBeer.jpeg" link="/new-beer" />
        </div>
    )
}

export default Home
