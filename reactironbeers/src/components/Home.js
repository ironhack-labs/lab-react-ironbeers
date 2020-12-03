import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'; 


const Home = () => {
    return (
        <div>
            <h1>Welcome Ironbeers</h1>
            <div>
                <img src='../../images/beer_img1.jpg' alt='bar image 1' />
                <Link to='/beers'><h2>See our Beers</h2></Link>
            </div>
            <div>
                <img src='../../images/beer_img2.jpg' alt='bar image 2' />
                <Link to='/random-beer'><h2>Select Random Beer</h2></Link>
            </div>
            <div>
                <img src='../../images/beer_img3.jpg' alt='bar image 3' />
                <Link to='/new-beer'><h2>Select new Beers</h2></Link>
            </div>
        </div>
    )
}

export default Home