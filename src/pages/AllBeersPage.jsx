import axios from "axios";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { Link } from "react-router-dom";

function AllBeersPage() {
    const [beers, setBeers] = useState([])

    axios.get("https://ih-beers-api2.herokuapp.com/beers")
    .then(response => {
        setBeers(response.data)
    })
    .catch(error => error)
    

    return (
    <>
    <Navbar/>
    {beers.map((elm) => {
        return (
            <div key={elm._id}>
            <img width={50} src={elm.image_url}/>
            <h1>{elm.name}</h1>
            <p>{elm.tagline}</p>
            <p>{elm.contributed_by}</p>
            <Link to="/beers/:beerId">Details</Link>
            <hr />
            </div>
            )
    })}
    </>
    )
}

export default AllBeersPage;
