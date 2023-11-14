import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function AllBeersPage() {

    const [beers, setBeers] = useState([]);
    const [fetching, setFetching] = useState(true)

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then((response) => {
                setBeers(response.data);
                setFetching(false);
            })
            .catch((error) => {
                console.log('Error' + error);
            })
    })

    return (
        <div className="all-beers">
            {fetching ? <p>Loading...</p> : beers.map((beer, i) => {
                return (
                    <section key={i} className="beer-all-beers-page">
                        <NavLink to={'/beers/${beer.id}'} >
                        <div className="beer-info">
                            <img src={beer.image_url} alt={`${beer.name} bottle`} />
                            <h1>{beer.name}</h1>
                            <h2>{beer.tagline}</h2>
                            <h3>Created by: {beer.contributed_by}</h3>
                        </div>
                        </NavLink>

                    </section>
                )
            })}

        </div>
    )
}

export default AllBeersPage;
