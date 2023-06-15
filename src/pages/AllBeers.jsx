import { useState } from "react";
import { useEffect } from "react";
import Header from "../components/Header";
import axios from "axios";

function AllBeers() {
  const [beersAll, setBeersAll] = useState([]);

  useEffect(() => {
    fetchBeers();
  }, []);

  const fetchBeers = async () => {
    const { data } = await axios("https://ih-beers-api2.herokuapp.com/beers");
    setBeersAll(data);
    console.log("ALL BEERS", data);
  };

  return (
    <div className="allBeers-box">
      <Header />
      <div>
      {beersAll.map((oneBeer) => {
        return (
          <div className="oneBeer-box">
            <img src={oneBeer.image_url} alt="beer bottle" />
            <div className="side-text">
              <h2>{oneBeer.name}</h2>
              <h3>{oneBeer.tagline}</h3>
              <h5>Created by: {oneBeer.contributed_by}</h5>
            </div>
          </div>
        );
      })}

      </div>
    
    </div>
  );
}

export default AllBeers;
