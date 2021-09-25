import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import CardList from "../CardList/CardList";

const ListBeers = () => {
    const [beers, setBeers] = useState([]);

    useEffect(() => {
      axios
        .get("https://ih-beers-api2.herokuapp.com/beers")
        .then((response) => {
          //console.log(response);
          setBeers([...response.data]);
        })
        .catch((err) => console.error(err));
    }, []);
  
    return (
      
      <div className="row">
       <Navbar />
        {beers.map((beerObj) => {
          return (
            <CardList beerObj={beerObj} />
          );
        })}
      </div>
    );
}

export default ListBeers