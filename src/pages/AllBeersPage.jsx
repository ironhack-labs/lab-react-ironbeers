import { useEffect, useState } from "react";
import { listBeers } from "../services/BeersServices";
import { Link } from "react-router-dom";


function AllBeersPage() {
    const [beers, setBeers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("")


    useEffect(() => {
        listBeers(search)
        .then((beers) => setBeers(beers))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false))
}, [search]);

    return (
       <div>
        <h2>All Beers</h2>

        <label htmlFor="search">Search</label>
        <input type="text" value={search} onChange={(event) => setSearch(event.target.value)}></input>

    { loading ? <p>loading...</p> : (
        <ul>
            {beers.map((beer) => (
                <li key={beer._id}>
                    <img src={beer.image} alt={beer.name}></img>
                    <p>{beer.name}</p>
                    <p>{beer.tagline}</p>
                    <p>{beer.contributed_by}</p>
                    <Link to={`/beers/${beer._id}`}>Details</Link>


                </li>
            ))}
        </ul>
    )}

       </div> 
    )
}

export default AllBeersPage;
