import Navbar from '../components/Navbar'
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Beers() {
  const [beersList, setBeersList] = useState(null)

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_APIURL)
      .then((responseFromApi) => {
        setBeersList(responseFromApi.data);
      })
      .catch((error) => console.log("Error from data API... ", error));
  }, []);
  return (
    <>
    <div>
      <Navbar />
      Beers
    </div>
    <h1>List of Beers</h1>
    {beersList ? (
        beersList.map((beer) => {
        return (
            <div>
          <Link to={`/beers/${beer._id}`}>
            <div className="beersDiv">
              <img src={beer.image_url} alt="beerImg" />
              <h1>{beer.name}</h1>
              </div>
              </Link>
            
              <div>
              <p>{beer.tagline}</p>
              <p>Created by: {beer.contributed_by}</p>
            </div>
            </div>
        );
      })
     ) : "loading......"
     };
    </>
  )
}
export default Beers;