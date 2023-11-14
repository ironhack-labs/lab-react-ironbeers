import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const beersAPI_URL = "https://ih-beers-api2.herokuapp.com/beers"

function AllBeersPage() {
    console.log("AllBeersPage has been invoked...")
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
            return (
              <div className="BeerList" key={beer.id}>
                <NavLink to="/beers/:beerId">
                <img src={beer.image_url} />
                </NavLink>
                <div className="BeerDetails">
                  <h1>{beer.name}</h1>
                  <p>{beer.tagline}</p>
                  <p>Created by: {beer.contributed_by}</p>
                </div>
              </div>
              
            );
        })
    )

    
    

}


//DO SOMETHING WITH THAT NULL

export default AllBeersPage;
