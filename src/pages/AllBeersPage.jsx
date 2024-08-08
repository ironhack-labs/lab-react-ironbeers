import Navbar from "../components/Navbar"
import {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import BeerDetailsPage from "./BeerDetailsPage"

function AllBeersPage() {

    const [beers,setBeers]=useState([])
    const [searchTerm, setSearchTerm]=useState('')

useEffect(()=>{
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
    .then((allBeers)=>{
        setBeers(allBeers.data)
        console.log(allBeers.data)
    })
    .catch((err)=>{
        console.log(err)
    })
},[])

useEffect(()=>{
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchTerm}`)
    .then((response)=>{
        setBeers(response.data)
    })
    .catch((err)=>{
        console.log(err)
    })
},[searchTerm])

  return (
    <div>
    <label>
        Search for Beer:
        <input type="text" value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}}/>
    </label>
    
        <h1>All Beers</h1>
        <button className="add-button"><Link to={`/new-beer`}>Add New Beer</Link></button>
        {beers.map((onebeer)=>{
            return(
                <div key={onebeer._id}>
                <img src={onebeer.image_url} alt={onebeer.name} className="img-size" />
               <Link to={`/beers/${onebeer._id}`}><h3>{onebeer.name}</h3></Link>
                <p>{onebeer.tagline}</p>
                <p>{onebeer.contributed_by}</p>
                <hr></hr>
                </div>
            )
        })}

    </div>
  )
}

export default AllBeersPage