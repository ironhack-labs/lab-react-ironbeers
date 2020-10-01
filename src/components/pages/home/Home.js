import React from 'react';
import '../home/Home.css'
import beer1 from '../home/beer1.png'
import beer2 from '../home/beer2.jpg'
import beer3 from '../home/beer3.jpg'
import { Link } from 'react-router-dom'




function Home() {

    return (
        <>
            <article>
                <img className="beerHome" src={beer1}></img>
                <Link to="/beers"><h2>All Beers</h2></Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula tellus arcu, ac sagittis nibh iaculis et. Sed a velit gravida, sodales nisi vel, porttitor quam. Pellentesque tellus quam, venenatis ut ligula eget, venenatis auctor eros. </p>
            </article>
            <article>
                <img className="beerHome" src={beer2}></img>
                <Link to="/randomBeer"><h2>Random Beer</h2></Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula tellus arcu, ac sagittis nibh iaculis et. Sed a velit gravida, sodales nisi vel, porttitor quam. Pellentesque tellus quam, venenatis ut ligula eget, venenatis auctor eros. </p>
            </article>
            <article>
                <img className="beerHome" src={beer3}></img>
                <h2>New Beer</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula tellus arcu, ac sagittis nibh iaculis et. Sed a velit gravida, sodales nisi vel, porttitor quam. Pellentesque tellus quam, venenatis ut ligula eget, venenatis auctor eros. </p>
            </article>
        </>
    )
}


export default Home