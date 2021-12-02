import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import beers from '../assets/beers.png'
import randomBeer from '../assets/new-beer.png'
import newBeer from '../assets/random-beer.png'

export default class HomePage extends Component {
    render() {
        return (
            <div>
            <Link to={`/beers`}>
            <img src={beers}/>
            <h1>All beers</h1>
            </Link>
            <p>Lorem salutandi eu mea, eam in soleat iriure assentior. Tamquam lobortis id qui. Ea sanctus democritum mei, per eu alterum electram adversarium. Ea vix probo dicta iuvaret, posse epicurei suavitate eam an, nam et vidit menandri. Ut his accusata petentium</p>
            <Link to={`/random-beers`}>
            <img src={randomBeer}/>
            <h1>Random beers</h1>
            </Link>
            <p>Lorem salutandi eu mea, eam in soleat iriure assentior. Tamquam lobortis id qui. Ea sanctus democritum mei, per eu alterum electram adversarium. Ea vix probo dicta iuvaret, posse epicurei suavitate eam an, nam et vidit menandri. Ut his accusata petentium</p>
            <Link to={`./new-beers`}>
            <img src={newBeer}/>
            <h1>New beers</h1>
            </Link>
            <p>Lorem salutandi eu mea, eam in soleat iriure assentior. Tamquam lobortis id qui. Ea sanctus democritum mei, per eu alterum electram adversarium. Ea vix probo dicta iuvaret, posse epicurei suavitate eam an, nam et vidit menandri. Ut his accusata petentium</p>
            </div>
        )
    }
}

