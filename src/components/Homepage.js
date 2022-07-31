import axios from "axios"
import { useEffect, useState } from "react"
import { Link, Route, Routes } from "react-router-dom"
import BeersList from "./BeersList"
import Navbar from "./Navbar"
import '../App.css';
import BeerDetails from "./BeerDetails"
import RandomBeer from "./RndBeer"
import CreateBeer from "./CreateBeer"


const Homepage = () => {
    const [beers, setBeers] = useState(null)

    const fetchBeers = () => {
        axios.get(process.env.REACT_APP_API_BASE_URL)
        .then(res => {
            setBeers(res.data)
        })
        .catch(e => console.log(e))
    }

    useEffect(() => {
        fetchBeers()
    },[])

 return ( <>
    <Navbar className="navbar" />
    <h1>Beer Beer Beer</h1>
    <Link to="/beers">All Beers</Link>
    <Link to="/beers/create">Add new beer</Link>
    <Link to="/beers/random">Show random beer</Link>
    <Routes>
        <Route path="/beers" element={<BeersList beers={beers}/>} ></Route>
        <Route path="/beers/:id" element={<BeerDetails beers={beers}/> }></Route>
        <Route path="/beers/random" element={<RandomBeer /> }></Route>
        <Route path="/beers/create" element={<CreateBeer /> }></Route>
    </Routes>
    </>
 )
}

export default Homepage