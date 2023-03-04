import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header";

import axios from "axios";
import { ClipLoader } from "react-spinners";

function Beers() {
  const [allBeers, setAllBeers] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      setAllBeers(response.data);
      console.log(response.data);
      setIsFetching(false);
    } catch (error) {
      console.error(error);
    }
  };

  if (isFetching === true) {
    return (
      <div>
        <ClipLoader />
      </div>
    );
  }

  return (
    <div>
      <Header />
      {allBeers.map((eachBeer) => {
        const { image_url, name, tagLine, contributed_by, _id } = eachBeer;
        return (
          <div>
            <img src={image_url} alt={name} height={"100px"} />
            <Link to={`/beers/${_id}`}>
              <h3>{name}</h3>
            </Link>
            <p>{tagLine}</p>
            <p>{contributed_by}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Beers;
