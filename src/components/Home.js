import React from 'react';
import imgBeers from '../assets/beers.png';
import imgRandomBeer from '../assets/random-beer.png';
import imgNewBeer from '../assets/new-beer.png';


export default function Home() {
    return (
        <div className='Home'>
            <div>
                <div>

                    <a href="/beers"> <img src={imgBeers} alt="beers" /> <h4>All Beers</h4> <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus cum repellat incidunt dolorum architecto et reiciendis nihil impedit quas at dolor</p>  </a>
                </div>
                <div>

                    <a href="/randomBeer"> <img src={imgRandomBeer} alt="randomBeer" /><h4>Random Beer</h4><p>Lorem ipsum dolor sit amet consectetur adipisicinepturi voluptas minus autem? architecto et reiciendis nihil impedit quas at dolor</p> </a>
                </div>
                <div>
                    <a href="/newBeer"><img src={imgNewBeer} alt="newBeer" /><h4>New Beer</h4> <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur optio libero eius ullam excepturi accusantium illum natus</p></a>
                </div>
            </div>
        </div>
    )
}