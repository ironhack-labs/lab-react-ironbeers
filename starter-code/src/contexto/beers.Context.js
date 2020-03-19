import React, { createContext, useState, useEffect } from "react";
import { listAllBeers } from "../../lib/auth.api";

export const BeersContext = createContext();
export const BeersContextProvider = props => {
  const [beers, setBeers] = useState([]);
  const fetchBeers = () => listAllBeers().then(beers => setBeers(beers));

  useEffect(() => {
    fetchBeers();
    // IMPORTANT: This is executed on component unmount (when the component disappears)
  }, []);

  return (
    <BeersContext.Provider value={{ beers }}>
      {props.children}
    </BeersContext.Provider>
  );
};
