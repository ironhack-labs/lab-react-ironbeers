import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllBeersPage() {
  const [beers, setBeersToDisplay] = useState(null);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/beers`)
      .then((response) => {
        console.log(response.data)
        setBeersToDisplay(response.data);
      })
      .catch((e) => {
        console.log(`Error retrieving beers from the Api`, e);
      });
  }, []);
  const beerList = () => {
    if (beers === null) {
      return <p>Loading...</p>;
    }
    return beers.map((beer) => {
     return(<div key={beer._id}>
        <img src={beer.image_url} alt="image" style={{maxWidth:"100px"}}/>
        <h3>{beer.name}</h3>
        <p>{beer.tagline}</p>
        <p>{beer.contributed_by}</p>
        <Link to={`/beers/${beer._id}`}>View Details</Link>
      </div>)
    });
  };
  return <>{beerList()}</>
}

export default AllBeersPage;
