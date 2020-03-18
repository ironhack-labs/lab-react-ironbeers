import React, { createContext, useState, useEffect } from "react";
import { listAllBeers } from "../../lib/auth.api";

console.log("listAllBeers", listAllBeers);
export const CountryContext = createContext();
export const CountryContextProvider = props => {
  const [tas, setTas] = useState([]);
  const fetchTAs = () => listAllBeers().then(tas => setTas(tas));

  useEffect(() => {
    fetchTAs();
    // IMPORTANT: This is executed on component unmount (when the component disappears)
  }, []);
  console.log("fetchTAs en", fetchTAs);
  return (
    <CountryContext.Provider value={{ fetchTAs }}>
      {props.children}
    </CountryContext.Provider>
  );
};
