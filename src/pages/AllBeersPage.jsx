import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_URL = "https://ih-beers-api2.herokuapp.com/beers";

function AllBeersPage() {
    const [beersList, setBeersList] = useState([]);

    const getAllBeers = () => {
        axios.get(API_URL)
            .then((response) => {
                setBeersList(response.data);
            })
            .catch((error) => {
                console.log("Error getting beers from the API...");
                console.log(error);
            })
    };


    useEffect(() => {
        getAllBeers();
    }, []);

    return (
        <div className="BeersListPage">
            {beersList.map((beer) => {
                return (
                    <div className="BeerCard" key={beer._id} >
                        <Link to={`/beers/${beer._id}`}>
                            <img className="beerImg" alt="`${beer.name}`" src={beer.image_url} />
                            <div className="beerDetails">
                                <h1>{beer.name}</h1>
                                <h2>{beer.tagline}</h2>
                                <h3>Creator: {beer.contributed_by}</h3>
                            </div>
                        </Link>
                    </div>
                );
            })}



        </div>
    )
}



export default AllBeersPage;
