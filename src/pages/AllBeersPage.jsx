import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllBeersPage() {

    const [beers, setBeers] = useState([]);

    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
            .then((response) => {
                console.log(response.data);
                setBeers(response.data)
            })
            .catch((e) => {
                console.log("error getting list of beers", e)
            });
    }, [])
    return (
        <div>
            <h1>Beers List:</h1>
            {beers.map((beer) => {
                return (
                    <div key={beer._id}>
                        <img src={beer.image_url} alt="" height={300} width={100} />
                        <h2>{beer.name}</h2>
                        <p>{beer.tagline}</p>
                        <p>{beer.contributed_by}</p>
                        <Link to={"/beers/" + beer._id}>click here for more details</Link>
                    </div>
                )
            })}
        </div>
    )
}



export default AllBeersPage;
