import {useState, useEffect} from "react"
import axios from "axios"
import React from "react"
import {Link} from "react-router-dom"

function AllBeersPage() {
const [beers, setBeers] = useState([])

useEffect(()=>{
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response)=>{
        setBeers(response.data);
        console.log(response.data)
    })
},[])

return (
    <div>
        <h3>List of Beers</h3>
        <ul>
        {beers.map((beer)=>
            <li key={beer._id}>
            <img src = {beer.image_url}/>
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
            <p>{beer.contributed_by}</p>
            <Link to = {`/beers/${beer._id}`}>{beer.name}</Link>
        </li>
        )}
        </ul>
    </div>
)
        }
export default AllBeersPage;
