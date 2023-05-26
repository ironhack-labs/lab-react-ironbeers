import React from 'react'
import ListBeers from '../Pages/ListBeers'
import RandomBeers from '../Pages/RandomBeers'
import AddBeer from '../Pages/AddBeer'
import {Link} from 'react-router-dom'
import Navbar from '../Components/Navbar'


function Home() {
  return (
    <div class='App'>
        <div class="card mb-3 card-size">
        <img src="https://www.pixelstalk.net/wp-content/uploads/2016/07/Beer-Image.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
            <Link to="/all-beers" element={<ListBeers/>}>
                <h5 class="card-title">All Beers</h5>  
            </Link>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
        <div class="card mb-3 card-size">
        <img src="https://www.pixelstalk.net/wp-content/uploads/2016/07/Beer-Wallpaper.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
            <Link to="/random-beer" element={<RandomBeers/>}>
                <h5 class="card-title">Random Beer</h5>  
            </Link>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
        <div class="card mb-3 card-size">
        <img src="https://www.pixelstalk.net/wp-content/uploads/2016/07/Beer-Wallpapers-HD.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
            <Link to="/add-beer" element={<AddBeer/>}>
                <h5 class="card-title">New Beer</h5>  
            </Link>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
    </div>
  )
}

export default Home