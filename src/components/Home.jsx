import React from "react";
import beers from '../../src/assets/beers.png'
import newBeer from '../../src/assets/new-beer.png'
import randomBeer from '../../src/assets/random-beer.png'
import axios from "axios";
import {Link} from 'react-router-dom'


function Home() {
  return (
    <div>
    <Link to={'/allbeers'}> 
    <img src={beers} alt="" />
    <h3>All Beers</h3>
    </Link>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, at totam delectus quae, inventore harum nihil, sapiente ab natus consectetur explicabo quia excepturi iusto praesentium voluptatum consequuntur iste dicta ad?</p>

    <Link to={'/randombeer'}> 
    <h3>Random Beers</h3>
    <img src={randomBeer} alt="" />
    </Link>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, at totam delectus quae, inventore harum nihil, sapiente ab natus consectetur explicabo quia excepturi iusto praesentium voluptatum consequuntur iste dicta ad?</p>

    <Link to={'/newbeer'}> 
    <img src={newBeer} alt="" />
    <h3>New Beer</h3>
    </Link>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, at totam delectus quae, inventore harum nihil, sapiente ab natus consectetur explicabo quia excepturi iusto praesentium voluptatum consequuntur iste dicta ad?</p>
    </div>
  )
}

export default Home