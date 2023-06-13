import React, { useState } from "react";
import { Link } from "react-router-dom";
import headerImg from "../assets/headerImg.png";
import { useEffect } from "react";
import axios from "axios";

function AllBeers() {
  const [beers, setBeers] = useState([]);

  useEffect(() => async {
    const {data} = await axios("https://ih-beers-api2.herokuapp.com/beers") 
    setBeers(data)
  }, []);

  return (
    <div>
      <Link to="/">
        <img src={headerImg} alt="headerImg" />
      </Link>
    </div>
  );
}

export default AllBeers;
