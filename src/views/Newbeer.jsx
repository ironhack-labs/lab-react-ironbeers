import React from "react";
import FormBeer from "../components/FormBeer";



const Newbeer = (props) => {
  console.log("props in admin forms page", props);
  return (
    <div>
      <FormBeer />
    </div>
  );
};

export default Newbeer;