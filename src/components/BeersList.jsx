import axios from "axios";
import { useEffect } from "react";
import "./BeersList.css";
import { Link } from "react-router-dom";

function BeersList(props) {
  const { beers, setBeers } = props;

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((beerData) => {
      console.log(beerData.data);
      setBeers(beerData.data);
    });
  }, [setBeers]);

  const handleFilter = (event) => {
    const value = event.target.value;
    console.log(value);
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${value}`)
      .then((queryData) => {
        console.log(queryData.data);
        setBeers(queryData.data);
      });
  };

  return (
    <div>
      <div>
        <label>Filter by Name: </label>
        <input
          onChange={(e) => handleFilter(e)}
          placeholder="filter by beer name"
        ></input>
        {beers.map((beer) => {
          return (
            <div className="flex card">
              <img className="smally" src={beer.image_url} />
              <div className="flex-col spaced">
                <h3 className="font-mid">{beer.name}</h3>
                <h5 className="tagline">{beer.tagline}</h5>
                <h6>Created by: {beer.contributed_by}</h6>
                <Link to={`/beers/${beer._id}`}>
                  <button>More Info</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BeersList;
