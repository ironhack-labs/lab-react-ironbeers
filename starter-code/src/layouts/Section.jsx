import React from "react";
import NavBar from "../components/NavBar";

const Section = ({ url, children }) => {
  console.log(url);
  return (
    <div>
      <NavBar {...{ url }} />
      {children}
    </div>
  );
};

export default Section;
