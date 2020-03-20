import React, { createContext, useState, useEffect } from "react";
import { listAllBeers, randomBeer } from "../../lib/auth.api";

export const BeersContext = createContext();
export const BeersContextProvider = props => {
  //Obtenr todas las cervezas
  const [beers, setBeers] = useState([]);
  const fetchBeers = () => listAllBeers().then(beers => setBeers(beers));

  useEffect(() => {
    fetchBeers();
  }, []);

  //Obtener id cerveza
  const getBeers = code => beers.filter(beer => beer._id === code)[0];

  return (
    <BeersContext.Provider value={{ beers, getBeers, randomBeer }}>
      {props.children}
    </BeersContext.Provider>
  );
};
