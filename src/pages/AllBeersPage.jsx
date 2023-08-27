import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function AllBeersPage() {
    const [beers, setBeers] = useState([]);
    const [fetching, setFetching] = useState([true]);

    useEffect (() =>{
        axios.get('https://ih-beers-api2.herokuapp.com/beers').then((response)=> {
            setBeers (response.data)
            fetching(false)
            console.log(response.data)
        })
    }, [])
    return (
        <div>
            <h3>All Beers</h3>
            {fetching && <p>Loading</p>}
            {beers.map((beer) => {
                return (
                    <div>
                        <img src={beer.image_url} alt="" />
                        <Link to={`/beers/${beer._id}`}>{beer.name}</Link>
                        <p>{beer.tagline}</p>
                        <p>Created by:{beer.contributed_by}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default AllBeersPage;
