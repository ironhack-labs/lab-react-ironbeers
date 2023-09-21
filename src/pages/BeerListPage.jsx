import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import BeerCard from "../components/BeerCard";

function BeerListPage() {
  const [beers, setBeers] = useState([]);
  const apiURL = "https://ih-beers-api2.herokuapp.com/beers";

  useEffect(() => {
    fetchBeers();
  }, []);

  const fetchBeers = async () => {
    try {
      const res = await axios.get(apiURL);
      setBeers(res.data)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="beer-list">
      <Header />
      {!beers.length && <span>Loading Beers....</span>}
      {beers.length && (
        <div className="row">
          {beers.map((beer) => {
            return  <BeerCard key={beer._id} beer={beer} />;
          })}
        </div>
      )}
    </div>
  );
}

export default BeerListPage;
