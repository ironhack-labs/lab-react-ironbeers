import React from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import axios from "axios";

const NewBeer = () => {
  return (
    <div>
        <NavBar />

      <h1>New Beer Page</h1>
    </div>
  );
};

export default NewBeer;