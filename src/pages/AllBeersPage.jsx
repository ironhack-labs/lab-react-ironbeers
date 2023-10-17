import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function AllBeersPage() {
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
          console.log("response.data", response.data);
          setBeers(response.data);
        });
      }, []);

    return (
        <div>
            <h2>Beers</h2>
            <ul>
                {beers.map(beer => {
                    return (
                        <li key={beer._id}>
                            <Link to={`/beers/${beer._id}`}>
                                <img src={beer.image_url} alt={beer.name} />
                                <h3>{beer.name}</h3>
                                <p>{beer.tagline}</p>
                                <p>Created by: {beer.contributed_by}</p>
                            </Link>
                        </li>
                    );
                })}

            </ul>
        </div>
    );
}

export default AllBeersPage;
