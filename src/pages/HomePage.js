import React from 'react'
import beersImg from "../assets/beers.png";
import newBeerImg from "../assets/new-beer.png";
import randomBeerImg from "../assets/random-beer.png";
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="HomePage">
        <div>
            <img src={ beersImg } alt="Beers" />
            <Link to="/beers"><h2>All Beers</h2></Link> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam omnis veniam at neque unde modi ad id ipsum explicabo, porro animi incidunt earum eum sapiente deserunt consequatur ut corporis cumque?</p>
            <hr />
        </div>
        <div>
            <img src={ newBeerImg } alt="Beers" />
            <Link to="/beers/create"><h2>New Beer</h2></Link>  
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, fugiat tenetur dignissimos autem quibusdam esse! Quia quibusdam dolorum quas adipisci commodi aspernatur fuga quod hic exercitationem, dicta minima! Ipsum, mollitia!</p>
            <hr />
        </div>
        <div>
            <img src={ randomBeerImg } alt="Beers" />
            <Link to="/beers/random"><h2>Random Beer</h2></Link>  
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quae at expedita, labore sed voluptate dignissimos quod quasi soluta perferendis nam laudantium ducimus dicta maxime sapiente odit! Sequi, repellat non?</p>
            <hr />
        </div>
    </div>
  )
}
