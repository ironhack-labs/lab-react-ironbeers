import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        console.log(response.data);
        setBeers(response.data);
      })
      .catch((e) => {
        console.log("error in All the Bears", e);
      });
  },[]);

  const addNewBeer = (newBeer) => {
    const newList = [newBeer, ...beers];
    setBeers(newList);
  };

  return (
    <>
      {beers?.map((beer) => {
        return (
          <div key={beer._id}>
            <img src={beer.image_url} alt="" />
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
            <p>{beer.contributed_by}</p>
            <Link to={"/beers/" + beer._id}>More Details</Link>
          </div>
        );
      })}
    </>
  );
}

export default AllBeersPage;
