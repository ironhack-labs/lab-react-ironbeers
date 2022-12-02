import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Search from "../components/Search";

function AllBeers(){
    const [beers, setBeers] = useState([]);
    const [query, setQuery] = useState();

    useEffect(()=>{
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then(res => setBeers(res.data))
        .catch(error => console.log(error))
    }, [])

    useEffect(()=>{
        axios.get("https://ih-beers-api2.herokuapp.com/beers/search?q=" + query)
        .then(res => setBeers(res.data))
        .catch(err=>console.log(err))
    }, [query])
   

    return(
        <>
            <Header />
            <Search setQuery={setQuery} />
            <h2>All Beers</h2>
            <div>
                { beers.map((beer)=>(
                    <Link to={`/beers/${beer._id}`} className="d-flex flex-row border text-decoration-none" key={beer._id}>
                        <div style={{height: 200, width: 200}} className="d-flex justify-content-center align-items-center">
                            <img src={beer["image_url"]} alt={beer.name} style={{height: "80%"}}/>
                        </div>
                        
                        <div className="d-flex flex-column justify-content-center">
                            <h2>{beer.name}</h2>
                            <h4>{beer.tagline}</h4>
                            <p><strong>Created by: </strong>{beer["contributed_by"]}</p>
                        </div>
                    </Link>
                  ))
                }
            </div>
        </>
    )
}

export default AllBeers;