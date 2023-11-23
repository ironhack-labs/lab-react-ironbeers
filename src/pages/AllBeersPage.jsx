import { useEffect, useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";
import AddBeerPage from "./AddBeerPage";
function AllBeersPage() {

    const [beers, setBeers] = useState([])
    const [beersBackup, setBeersBackup] = useState([])

    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
            .then(response => {
                setBeers(response.data)
            })
            .catch(err => console.error("Error", err))
    }, [])

    return (
        <div>
            <h1>All Beers</h1>
            <hr />
            {beers.map((beer) => {
                return (
                    <Link to={`/beers/${beer._id}`}>
                        <div className="eachBeer" key={beer._id}>
                            <div>
                                <img src={beer.image_url} alt="beer" style={{ height: 150 }} />
                            </div>
                            <div>
                                <h4>{beer.name}</h4>
                                <hr />
                                <h6>{beer.tagline}</h6>
                                <p>Created by: {beer.contributed_by}</p>
                            </div>
                        </div>
                    </Link>

                )
            })}
        </div>
    )
}

export default AllBeersPage;
