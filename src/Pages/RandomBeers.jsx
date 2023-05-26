import Navbar from "../Components/Navbar"
import {useParams, Link} from "react-router-dom";
import {useState, useEffect} from "react"
import axios from "axios";


function RandomBeers() {
    let [beer, setBeer] = useState("");

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`).then((response) => {
          setBeer(response.data);
        });
      }, []);

    return (
        <div>
          <Navbar />
          {!beer ? (
            <p>Loading...</p>
          ) : (
            <div class="display-beers">
              <h3>Name: {beer.name}</h3>
              <p>Tagline: {beer.tagline}</p>
              <img src={beer.image_url} alt="" width="150px"/>
              <p>Contributed By: {beer.contributed_by}</p>
            </div>
          )}
        </div>
      );
}

export default RandomBeers