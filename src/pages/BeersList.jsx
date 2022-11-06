import React from "react";
import Navbar from "../components/Navbar";
import HomeImage from "../assets/navbar.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function BeersList() {
  const [beerList, setBeerList] = useState([]);
  const { isFetching, setIsFetching } = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      console.log(response.data);
      setBeerList(response.data);
      setIsFetching(false);
    } catch (err) {
      console.log(err);
    }
  };

  if (isFetching === true) {
    return <h3>...searching</h3>;
  }

  return (
    <div className="fatherDiv">
      <Navbar />
      {beerList.map((eachBeer) => {
        return (
          <div key={eachBeer._id} className="divList" >
            <div className="divImage">
              <img src={eachBeer.image_url} alt="" width={50} />
            </div>
            <div className="divText">
              <Link to={`/beers/${eachBeer._id}`}>
      
                <h3>{eachBeer.name}</h3>
              </Link>

              <p>{eachBeer.tagLine}</p>
              <p>{eachBeer.contributed_by}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BeersList;
