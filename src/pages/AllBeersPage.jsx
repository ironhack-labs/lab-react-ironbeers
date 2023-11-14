import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const beersAPI_URL = "https://ih-beers-api2.herokuapp.com/beers"

function AllBeersPage() {
    const[listOfBeers, setListOfBeers] = useState([])

    const getAllBeers = () => {
        axios
          .get(beersAPI_URL)
          .then((response) => {
            setListOfBeers(response.data)
          })
          .catch((error) => {
            console.log("Error: " + error)
          });
    }

    useEffect(() => {
        getAllBeers()
    }, [])

    return (
        listOfBeers.map((beer) => {
            //console.log(beer)
            return (
              <div className="BeerList" key={beer._id}>
                <Link to={`/beers/${beer._id}`}>
                  <img src={beer.image_url} />
                </Link>
                <div className="BeerDetails">
                  <h1>{beer.name}</h1>
                  <p>{beer.tagline}</p>
                  <p>Contributed by: {beer.contributed_by}</p>
                </div>
              </div>
            );
        })
    )
}

export default AllBeersPage;
