import React from 'react';
// import { Link } from 'react-router-dom'

import BeerContainer from './BeerContainer'
import beers from "./assets/beers.png"
import randomBeer from "./assets/random-beer.png"
import newBeer from "./assets/new-beer.png"


function HomePage () {
    
    return(
<div>
    <BeerContainer
        img={beers}
        title="All Beers"
        resume="Covering everything from creative young local breweries to established tasting houses and well-stocked craft beer bars."
        to="/allbeers"
    />
    <BeerContainer
        img={randomBeer}
        title="Random Beers"
        resume="llalalalalalalalalauauhauauhauakjaheuheuhrhkeuhellalalalalalalalalauauhauauhauakjaheuheuhrhkeuhewwww"
        to="/random"
    />
    <BeerContainer
        img={newBeer}
        title="Random Beers"
        resume="llalalalalalalalalauauhauauhauakjaheuheuhrhkeuhllalalalalalalalalauauhauauhauakjaheuheuhrhkeuhewweww"
        to="/allbeers/new"
    />
</div>
    )
}

export default HomePage;