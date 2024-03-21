import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const beersAPI = "https://ih-beers-api2.herokuapp.com/beers";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);
  const [beersFromAPI, setBeersFromAPI] = useState([]);
  const [searchBeer, setSearchBeer] = useState("");

  useEffect(() => {
    axios.get(beersAPI).then((response) => {
      setBeers(response.data);
      setBeersFromAPI(response.data);
    });
  }, []);

  useEffect(() => {
    filterBeers();
  }, [searchBeer]);

  const filterBeers = () => {
    const filteredBeers = beersFromAPI.filter((beer) => {
      return beer.name.toLowerCase().includes(searchBeer.toLowerCase());
    });
    setBeers(filteredBeers);
  };

  const handleChange = (e) => {
    const newBeer = e.target.value.toLowerCase();
    setSearchBeer(newBeer);
  };

  return (
    <div>
      <h1>All Beers</h1>
      <input
        onChange={handleChange}
        value={searchBeer}
        placeholder="Search Beer"
      />
      <br />
      <ul>
        {beers.map((beer) => (
          <li className="beer-container" key={beer._id}>
            <img style={{width: '50px', height: 'auto'}}src={beer.image_url} />
            <Link to={`/beers/${beer._id}`}>{beer.name}</Link>
            <p>{beer.tagline}</p>
            <p>Created by: {beer.contributed_by}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllBeersPage;
