import axios from "axios";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Beers() {
  const [beersArr, setBeersArr] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/`)
      .then((response) => setBeersArr(response.data))
      .catch((e) =>
        console.log("Error getting the list of beers from the API", e)
      );
  }, []);

  return (
    <>
      <Header />
      {beersArr ? (
        beersArr.map((beerObj) => {
          return (
            <div key={beerObj._id}>
              <div>
                {beerObj.image_url && (
                  <Link to={`/beers/${beerObj._id}`}>
                    <img src={beerObj.image_url} alt={beerObj.name} />
                  </Link>
                )}
              </div>
              <div>
                <h1>{beerObj.name}</h1>
                <h2>{beerObj.tagline}</h2>
                <p>Created by: {beerObj.contributed_by}</p>
                <Link to={`/beers/${beerObj._id}`}>Details</Link>
                <hr />
              </div>
            </div>
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default Beers;
