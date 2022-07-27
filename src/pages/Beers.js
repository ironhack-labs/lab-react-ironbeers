import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";

function Beers(props) {

    const [beerArray, setBeerArray] = useState([])

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then(response => setBeerArray(response.data))
        .catch(err => console.log(err))
        }, []);
    

  return (
    <>
      <NavBar />

      <div className="beerList">
        <h1>All Beers</h1>
        {beerArray.map((beer) => {
          return (
            <div className="oneBeer" key={beer._id}>
             <div> <img src={beer.image_url} alt="beer" /> </div>
              <div className="beerInfo">
                <Link to={`/${beer._id}`}>
                  <h2>{beer.name}</h2>
                </Link>
                <h3>{beer.tagline}</h3>
                <p>{beer.description}</p>
                <p>{beer.contributed_by}</p>
                <p>ABV:{beer.abv}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Beers;
