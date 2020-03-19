import React, { createContext } from "react";
import Button from "./../components/ui/button";

export const MenuContext = createContext();

const MenuContextProvider = props => {
  return (
    <MenuContext.Provider>
      <Button path="/">Home</Button>
      {props.children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;
