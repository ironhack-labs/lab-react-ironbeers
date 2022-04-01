import React from "react";
import { Link } from "react-router-dom";

import beers from '../../assets/beers.png'
import randomBeer from '../../assets/random-beer.png'
import newBeer from '../../assets/new-beer.png'
import './Home.css'



const Home = () => {
    
    return(
        <div>
            <div className="mt-3">
                <img src={beers} alt="All beers" />
                <div className="home-headers">
                    <Link to="/beers"><h3>All Beers</h3></Link>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida, metus et malesuada mattis, felis urna iaculis enim, id tristique turpis mauris sit amet ipsum. Integer pretium, nulla et sollicitudin sagittis, quam justo auctor nunc, vitae placerat magna sem vel libero.</p>
                </div>
            </div> 

            <div className="mt-3">
                <img src={randomBeer} alt="Random beer" />
                <div className="home-headers">
                    <Link to="/beers/random"><h3>Random Beer</h3></Link>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida, metus et malesuada mattis, felis urna iaculis enim, id tristique turpis mauris sit amet ipsum. Integer pretium, nulla et sollicitudin sagittis, quam justo auctor nunc, vitae placerat magna sem vel libero.</p>
                </div>
            </div> 

            <div className="mt-3">
                <img src={newBeer} alt="New beer" />
                <div className="home-headers">
                    <Link to="/newBeer"><h3>New Beer</h3></Link>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida, metus et malesuada mattis, felis urna iaculis enim, id tristique turpis mauris sit amet ipsum. Integer pretium, nulla et sollicitudin sagittis, quam justo auctor nunc, vitae placerat magna sem vel libero.</p>
                </div>
            </div> 
        </div>
    )
}

export default Home