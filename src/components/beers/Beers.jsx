import { useEffect, useState } from "react";
import { getAllBeers } from "../../services/beersAPI";
import Detail from "./Detail";
import "./beers.css";

const Beers = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    getAllBeers().then((beers) => setBeers(beers));
  }, []);

  return (
    <div>
      {beers.length ? (
        beers.map((beer) => <Detail key={beer._id} {...beer} />)
      ) : (
        <div className="beers-container">
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Beers;
