import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import '../App.css';

function Beers() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    fetchBeers();
  }, []);

  const fetchBeers = () => {
    axios
      .get(process.env.REACT_APP_API_BASE_URL + `/beers`)
      .then((response) => {
        setBeers(response.data);
        console.log(response.data)

      })
      .catch((e) => {
        // console.log(e);
      });
  };

  return (
    <div >
         <header>
      <Link  to="/">Home</Link> <br/>
      </header>

      <h1>List of Beers</h1>
      {beers.map((beer) => {
        return (
          <div key={beer._id} className="BeersList">
            <img src={beer.image_url} /> <br />
            <h1>{beer.name}</h1>
            <p>{beer.tagline}</p>
            <p>{beer.contributed_by}</p>
            <Link to={`/beers/${beer._id}`}>Details</Link>
          </div>
        );
      })}
    </div>
  );
}

export default Beers;