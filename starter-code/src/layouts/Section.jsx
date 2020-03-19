import React from "react";
import NavBar from "../components/NavBar";

const Section = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default Section;
