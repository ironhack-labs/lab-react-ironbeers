import { useState, useEffect } from "react"
import {Link} from 'react-router-dom'
import axios from 'axios'

const API_URL = "https://ih-beers-api2.herokuapp.com/beers";

function AllBeersPage() {
    
    const [beersList, setBeersList] = useState(null);

    const getBeers = () => {
        axios
          .get(API_URL)
          .then((response) => {
            console.log("Received data from API:", response.data);
            setBeersList(response.data); // Update state with the received data
          })
          .catch((error) => {
            console.log("Error getting beers from the API...");
            console.log(error);
          });
      };
      
      

      useEffect(() => {
        getBeers();
      }, []);

    return (
      <>
        <ul className="beers-list">
          {beersList === null 
            ?  <p>Loading</p>
           :  beersList.map((beer) => {
              return (
                <Link key={beer._id} to={`/beers/${beer._id}`}>
                  <li  className="beer-block">
                    <img src={beer.image_url} />
                    <h3>{beer.name}</h3>
                    <p>{beer.tagline}</p>
                    <p>{beer.contributed_by}</p>
                    <br />
                  </li>
                </Link>
              );
            })}
        </ul>
      </>
    );
}

export default AllBeersPage;
