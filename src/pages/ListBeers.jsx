import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";

const apiURL = "https://ih-beers-api2.herokuapp.com/beers";

const ListBeers = () => {
  const [beers, setBeers] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams("");

  //! I'm not a fan of the idea, to make an API request for each keystroke
  const query = searchParams.get("q");
  const handleSearchInput = e => {
    setSearchParams({ q: e.target.value });
  };

  useEffect(() => {
    axios
      .get(apiURL + `/search?q=${query}`)
      .then(response => {
        setBeers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [query]);

  useEffect(() => {
    axios
      .get(apiURL)
      .then(response => {
        setBeers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Header query={query || ""} handleSearchInput={handleSearchInput} showSearchBar={true} />
      {/*//? Moved to header component.  
        <label htmlFor="input-search-query"></label>
      <input type="text" id="input-search-query" placeholder="Search for a beer" value={query} onChange={handleSearchInput} />*/}

      <ul className="beer-list">
        {beers?.map(({ _id, image_url, name, tagline, contributed_by }) => {
          return (
            <li key={_id}>
              <Link to={`/beer/${_id}`} className="Link list">
                <div className="imgDiv">
                  <img src={image_url} alt={name} />
                </div>
                <div className="content-preview">
                  <h2>{name}</h2>
                  <p>{tagline}</p>
                  <p>
                    <strong>Created by: </strong>
                    {contributed_by}
                  </p>
                </div>
              </Link>
            </li>
          );
        }) || <h3>Loading Beers</h3>}
      </ul>
    </div>
  );
};

export default ListBeers;
