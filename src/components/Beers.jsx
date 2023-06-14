import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Beers(props) {
  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    setQuery(event.target.value);
  };

  console.log(query);

  // const [beers, setBeers] = useState([])
  // useEffect(() => {
  // 	async function fetchBeers() {
  // 		const response = await fetch('https://ih-beers-api2.herokuapp.com/beers')
  // 		const data = await response.json()
  // 		setBeers([...data])
  // 	}
  // 	fetchBeers()
  // }, [])

  // 	// https://ih-beers-api2.herokuapp.com/beers/search?q={query}
  // }

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="search for a beer"
      />
      <h1>Beers</h1>

      {props.beers.map((beer) => {
        return (
          <div key={beer._id}>
            <img src={beer.image_url} alt={beer.name} width="100" />
            <h2>{beer.name}</h2>
            <p>{beer.tagline}</p>
            <small>{beer.contributed_by}</small>
            <Link to={`/beers/${beer._id}`}>Details</Link>
          </div>
        );
      })}
    </div>
  );
}

export default Beers;
