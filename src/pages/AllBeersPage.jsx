import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function AllBeersPage() {
    const[ allBeers, setAllBeers] = useState([]);

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers').then((response) => {
            setAllBeers(response.data)
            console.log(allBeers)
        })
    })


    return(
        <div>
            <h2>Beers List</h2>
            {allBeers.map((beer)=>{
                return(
                    <div key={beer._id}>
                        <img src={beer.image_url} alt="beer logo" />
                        <Link to={`/beers/${beer._id}`}>
                            <h3>{beer.name}</h3>
                        </Link>
                        <p>{beer.tagline}</p>
                        <p>Created by: {beer.contributed_by}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default AllBeersPage;
