import React, { createContext, useState, useEffect } from "react";
import { listAllBeers } from "../../lib/auth.api";

export const BeersContext = createContext();
export const BeersContextProvider = props => {
  const [beers, setBeers] = useState([]);
  const fetchBeers = () => listAllBeers().then(beers => setBeers(beers));

  const getBeers = code => beers.filter(beer => beer._id === code)[0];

  useEffect(() => {
    fetchBeers();
  }, []);

  return (
    <BeersContext.Provider value={{ beers, getBeers }}>
      {props.children}
    </BeersContext.Provider>
  );
};
