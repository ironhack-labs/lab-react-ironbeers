import React, { useEffect, useState } from "react";
import BeerList from "../../components/beers/BeerList";
import { listBeers } from "../../services/BeerService";

const ListBeers = () => {
  const [beers, setbeers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    listBeers().then((beers) => {
      setLoading(false);
      setbeers(beers);
    });
  }, []);

  const renderBeers = () => {
    if (loading) {
      return <p>Loading...</p>;
    }
    return <BeerList beers={beers} />;
  };

  return (
    <div>
     {renderBeers()}
    </div>
  );
};

export default ListBeers;
