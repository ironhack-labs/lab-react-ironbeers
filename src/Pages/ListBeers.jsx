import Navbar from "../Components/Navbar"
import { useEffect, useState } from "react";
import {Link } from 'react-router-dom';
import axios from "axios";


let apiURL = "https://ih-beers-api2.herokuapp.com/beers";

function ListBeers() {
    let [beers, setBeers] = useState([]);

    useEffect(()=>{
        axios.get(apiURL).then((response)=>{
           setBeers(response.data);
        })
    })

  return (
    <div>
        <Navbar/>
        <div class="display-beers">
            <h1>All Beers</h1>
            {!beers && <p>Loading...</p>}
            {beers.map((beer)=>{
                return(
                    <div key={beer._id}>
                        <h3>Name: {beer.name}</h3>
                        <p>Tagline: {beer.tagline}</p>
                        <img src={beer.image_url} alt="" width="150px"/>
                        <p>Contributed By: {beer.contributed_by}</p>
                        <Link to={`/beers/${beer._id}`}>
                        See details
                        </Link>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ListBeers