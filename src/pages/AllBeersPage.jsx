import axios from "axios";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";


function AllBeersPage() {
    const beerId = useParams()
    const [beers, setBeers] = useState([])
    const [query, setQuery] = useState("")

useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
    .then(response => {
        setBeers(response.data)
    })
    .catch(error => error)
},[])

useEffect(()=> {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
    .then((response)=> {
        setBeers(response.data)
    })
    .catch((err) => {
        console.log("unable to search beer because of error: ", err)
    })
}, [query])

    const handleSearch = (string) => {
        setQuery(string)
    }

    return (
    <>
    <Navbar/>
    <SearchBar handleSearch={handleSearch}/>

    {beers.map((elm) => {
        return (
            <div key={elm._id}>
            <img width={50} src={elm.image_url}/>
            <h1>{elm.name}</h1>
            <p>{elm.tagline}</p>
            <p>{elm.contributed_by}</p>
            <Link to={`/beers/${elm._id}`}>Details</Link>
            <hr />
            </div>
            )
    })}
    </>
    )
}

export default AllBeersPage;
