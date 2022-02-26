import { Link } from "react-router-dom";
import { useState } from "react";
import NavBar from "./NavBar";
import Search from "./Search";

export default function BeersList(props) {

  const [searchResults, setSearchResults] = useState([]);

  const filterBeers = (searchTerm) => {
    if (searchTerm !== "") {
      const filteredBeers = props.beers.filter((elm) => {
        return Object.values(elm.name)
          .join("")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(filteredBeers);
    } else {
      setSearchResults(props.beers);
    }
  };

  return (
    <>
      <NavBar />
      <Search filterBeers={filterBeers} />

      <div className="BeersList">
        <ul>
          {searchResults.length > 0
            ? searchResults.map((elm) => {
                return (
                  <li>
                    <img src={elm.image_url} alt={elm.name} />
                    <h3>Name: {elm.name} </h3>
                    <p>Tagline: {elm.tagline} </p>
                    <p>Contributed by: {elm.contributed_by} </p>
                    <Link to={`/beers/${elm._id}`}>More details</Link>
                  </li>
                );
              })
            : props.beers.map((elm) => {
                return (
                  <li>
                    <img src={elm.image_url} alt={elm.name} />
                    <h3>Name: {elm.name} </h3>
                    <p>Tagline: {elm.tagline} </p>
                    <p>Contributed by: {elm.contributed_by} </p>
                    <Link to={`/beers/${elm._id}`}>More details</Link>
                  </li>
                );
              })}
        </ul>
      </div>
    </>
  );
}
