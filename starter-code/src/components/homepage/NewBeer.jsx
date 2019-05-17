import React from "react";
import NewBeersIMG from "../../img/new-beer.png";
import { Link } from "react-router-dom";

const imgStyles = {
  width: "100%"
};

const NewBeer = () => {
  return (
    <div>
      <Link to="/new-beer">
        <img src={NewBeersIMG} style={imgStyles} />
      </Link>
      <h2>New Beer</h2>
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

export default NewBeer;
