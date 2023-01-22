import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import HomeCard from '../components/HomeCard'
import beers from '../assets/beers.png'
import randomBeer from '../assets/random-beer.png'
import newBeer from '../assets/new-beer.png'


const HomePage = () => {
    return (
        <div>
            <h1>Home page</h1>





            <Link to="/beers"><HomeCard title="All Beers" img={beers} /></Link>
            <Link to="/random-beer"><HomeCard title="Random Beer" img={randomBeer} /></Link>
            <Link to="/new-beer"><HomeCard title="New Beer" img={newBeer} /></Link>

            <Routes>
                <Route path="/beers" element={<HomeCard title="All Beers" img={beers} />} />
                <Route path="/random-beer" element={<HomeCard title="Random Beer" img={randomBeer} />} />
                <Route path="/new-beer" element={<HomeCard title="New Beer" img={newBeer} />} />
            </Routes>

        </div>
    )
}

export default HomePage