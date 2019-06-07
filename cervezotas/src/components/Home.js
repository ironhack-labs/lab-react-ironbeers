import React from 'react'
import ImgAllBeers from '../img/beers.png'
import ImgNewBeer from '../img/new-beer.png'
import ImgRandomBeer from '../img/random-beer.png'
import {Link} from 'react-router-dom'

const Home =()=>{
    return(
        <div>
            <div>
                <img src={ImgAllBeers} alt="all-beers"/>
                <Link to='/list'><h2>All beers</h2></Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit numquam pariatur accusamus ex facilis consequatur, minus consequuntur cupiditate cumque enim natus? Corporis labore reiciendis pariatur ut fuga amet, voluptatem est!</p>
            </div>
            <div>
                <img src={ImgNewBeer} alt="new-beers"/>
                <Link to='/new/beer'><h2>New beer</h2></Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit numquam pariatur accusamus ex facilis consequatur, minus consequuntur cupiditate cumque enim natus? Corporis labore reiciendis pariatur ut fuga amet, voluptatem est!</p>
            </div>
            <div>
                <img src={ImgRandomBeer} alt="all-beers"/>
                <Link to='/beer/random'><h2>Random beer</h2></Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit numquam pariatur accusamus ex facilis consequatur, minus consequuntur cupiditate cumque enim natus? Corporis labore reiciendis pariatur ut fuga amet, voluptatem est!</p>
            </div>
        </div>
    )
}

export default Home