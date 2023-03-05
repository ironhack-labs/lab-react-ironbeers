import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import headerImg from "../assets/header.png"
import axios from 'axios';

function ListBeers() {

    const [beers, setBeers] = useState([])
    const [loading, setLoading] = useState(false)

    const getBeers = async () => {
        try {
            let response = await axios.get("https://ih-beers-api2.herokuapp.com/beers");
            console.log(response.data);
            setBeers(response.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getBeers();
    }, []);


    return (
        <div>
            <header>
                <Link to={"/"}><img src={headerImg}></img></Link>
            </header>
            <h1>List of Beers</h1>
            
            {loading && <h2>Loading...</h2>}

            {beers.map((beer) => {
                return (
                    <div key={beer._id}>
                        
                        <img src={beer.image_url} alt="beer" />

                        <Link to={`/${beer._id}`}>See details</Link>

                        <h3>{beer.name}</h3>

                        <p>{beer.contributed_by}</p>

                        <p> {beer.tagline}</p>
                    </div>
                );
            })}

        </div>
    )
}

export default ListBeers