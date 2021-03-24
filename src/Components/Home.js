import React from 'react'
import { Link } from 'react-router-dom'
import beersImage from '../assets/beers.png'
import newBeersImg from '../assets/new-beer.png'
import randomBeerImg from '../assets/random-beer.png';

const Home = () => {
    return (
      <div>
        <h1> Welcome to the Beers Home Page</h1>
        <div>
          <Link to="/AllBeers">
            <img src={beersImage} alt="" />
           <br/>All Beers
           </Link>
           <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing
        </div>

        <div>
          <Link to="/RandomBeer">
            <img src={randomBeerImg} alt="" />
           <br/> Random Beer
           </Link>
          <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing
        
        
        </div>

        <div>
          <Link to="/NewBeer">
              <img src={newBeersImg} alt=""/>
             <br/>Create New Beer
             </Link>
             <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing
           
        </div>
      </div>
    );
}

export default Home