import { React, useState, useEffect } from "react";
import Header from "../components/Header";
import axios from "axios";
import { Link } from "react-router-dom";

const ListBeers = () => {
  const [beerList, setBeerList] = useState(null);

  useEffect(() => {
    // <== ADD THE EFFECT
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      console.log("response.data", response.data);
      setBeerList(response.data);
    });
  }, []);

  if (!beerList) {
    return (
      <div>
        <Header />
        <p>Retrieving data...</p>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <ul>
        {beerList.map((beer) => {
          return (
            <div key={beer.name}>
              <div className="beerContainer">
                <img src={beer.image_url} className="beerImage" />
                <div className="beerInfo">
                  <h2>
                    <Link to={`/single-beer/${beer._id}`}>{beer.name}</Link>
                  </h2>
                  <h3>{beer.tagline}</h3>
                  <p>{beer.contributed_by}</p>
                </div>
              </div>
              <hr></hr>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ListBeers;
