import "./Beers.css";
import axios from "axios";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Beers() {
  const [beersArr, setBeersArr] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => getBeersArr(), []);

  const getBeersArr = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/`)
      .then((response) => setBeersArr(response.data))
      .catch((e) =>
        console.log("Error getting the list of beers from the API", e)
      );
  };

  const searchBeer = (queryToSearch) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/search?q=${queryToSearch}`)
      .then((response) => setBeersArr(response.data))
      .catch((e) => console.log("Error getting beers from API", e));
  };

  return (
    <>
      <Header /> <br />
      <label>Search by name</label> <br />
      <input
        type="search"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          searchBeer(e.target.value);
        }}
      />
      <div className="container">
      {beersArr ? (
        beersArr.map((beerObj) => {
          return (
            
            <div className="beerbox" key={beerObj._id}>
              <div className="beerimg">
                {beerObj.image_url && (
                  <Link to={`/beers/${beerObj._id}`}>
                    <img src={beerObj.image_url} alt={beerObj.name} />
                  </Link>
                )}
              </div>
              <div className="beerinfo">
                <h1>{beerObj.name}</h1>
                <h2>{beerObj.tagline}</h2>
                <p><span style={{fontWeight: 'bold'}}>Created by:</span> {beerObj.contributed_by}</p>
                <Link to={`/beers/${beerObj._id}`}>Details</Link>
              </div>
            </div>
            
            
          );
        })
      ) : (
        <p>Loading...</p>
      )}
      </div>
    </>
  );
}

export default Beers;
