import { useState, useEffect } from "react"; // <== IMPORT useEffect
import axios from "axios"; // <== IMPORT axios

function BeersPage() {
  // apartments starts as an empty array
  // when we GET the data from the backend,
  // we can "setApartments(that data)"
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    // All of our axios calls have to be in a useEffect
    // or in a event handler, because we do not want
    // to call the API every render / we only want to
    // call the API during a mount, or an update
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      console.log("response.data", response.data);
      setBeers(response.data);
    });
  }, []); // <- [] means: Run the effect only once, after initial render

  return (
    <div>
      <h3>List of beers</h3>

      {beers.map((beer) => (
        <div>
          <img src={beer.image_url} alt="beer" />
          <h3>{beer.name}</h3>
          <p>{beer.tagline}</p>
          <p>{beer.contributed_by}</p>
        </div>
      ))}
    </div>
  );
}

export default BeersPage;
