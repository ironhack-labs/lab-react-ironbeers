import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function AllBeersPage(props) {
  const [fetching, setFetching] = useState(true);
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers`).then((response) => {
      setBeers(response.data);
      setFetching(false);
      console.log(response.data);
    });
  }, []);

  return (
    <div>
      <h2>All Beers</h2>
      <div>
        {fetching && <p>Loading</p>}
        {beers.map((beer) => {
          return (
            <div key={beer._id}>
              <img src={beer.image_url} alt="" />
              <Link to={`/beers/${beer._id}`}>{beer.name}</Link>
              <h3>{beer.tagline}</h3>
              <h4>Created by: {beer.contributed_by}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllBeersPage;
