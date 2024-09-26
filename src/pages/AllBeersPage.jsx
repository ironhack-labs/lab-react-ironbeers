import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        setBeers(response.data);
      })
      .catch((error) => {
        console.log("erreur"); // to do : implement an error
      });
  }, []);
  return (
    <div>
      <ul>
        {beers.map((beer) => (
          <li> 
            <Link to={`/beers/${beer._id}`}>
            <img src={beer.image_url}/>
            {beer.name}
            {beer.tagline}
            {beer.contributed_by}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllBeersPage;
