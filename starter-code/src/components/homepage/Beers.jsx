import React from "react";
import BeersIMG from "../../img/beers.png";
import { Link } from "react-router-dom";

const imgStyles = {
  width: "100%"
};

const Beers = () => {
  return (
    <div>
      <Link to="/beers">
        <img src={BeersIMG} style={imgStyles} />
      </Link>

      <h2>All Beers</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        tincidunt leo nibh, quis blandit purus scelerisque et. Vestibulum vel
        hendrerit nibh. Aenean a scelerisque lacus, a aliquam dui. Fusce et
        nulla sit amet risus placerat sodales. Sed elementum auctor laoreet. Nam
        laoreet euismod lectus, vitae lacinia nibh accumsan id. Sed iaculis sem
        at porta euismod.
      </p>
    </div>
  );
};

export default Beers;
