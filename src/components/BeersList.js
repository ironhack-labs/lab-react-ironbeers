import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";

function BeersList() {
  const baseURL = "https://ih-beers-api2.herokuapp.com";

  const [beersList, setbeersList] = useState(null);
  const [searchValue, setSearchValue] = useState(null);

  const fetchBeersList = async () => {
    try {
      let res
      if(searchValue !== null){
        res = await axios.get(baseURL + "/beers/search?q="+ searchValue);
      } else {
        res = await axios.get(baseURL + "/beers");
      }
      setbeersList([...res.data]);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchBeersList();
  }, [searchValue]);

  useEffect(() => {
    fetchBeersList();
  }, []);

  const displayBeersList = () => {
    return beersList.map((element, index) => {
      return (
          <div key={index}>
            {element.image_url ? (
              <img
                src={element.image_url}
                alt={element.name}
                style={{ height: "200px" }}
              />
            ) : (
              ""
            )}
            <h3>{element.name}</h3>
            <p>Tagline: {element.tagline}</p>
            <p>Contributed By: {element.contributed_by}</p>
            <Link to={"./" + element._id}>More Detail</Link>
          </div>
      );
    });
  };

  return (
    <>
      <Header />
      <div className="search">
        <label>
          Search
          <input
            type="search"
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
        </label>
      </div>
      {beersList ? displayBeersList() : <p>..loading</p>}
    </>
  );
}

export default BeersList;
