import React, {createContext} from "react";
import Navbar from "./../components/Navbar";

export const ContextBeer = createContext();

const NavbarContestProvider = props => {
  return (
    <ContextBeer.Provider>
      <Navbar></Navbar>
      {props.children}
    </ContextBeer.Provider>
  )
};

export default NavbarContestProvider;