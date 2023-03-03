import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AllBeers() {
  const [allBeers, setAllBeers] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      console.log(response);
      setAllBeers(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h3>Todas las cervezas</h3>
      {allBeers.map((cadaCerveza) => {
        return (
          <div>
          <img src={cadaCerveza.image_url} alt="" width="50px" />
            <h4>{cadaCerveza.name}</h4>
            <h6>{cadaCerveza.tagline}</h6>
            <h6>{cadaCerveza.contributed_by}</h6>
            <Link to={`/beer-details/${cadaCerveza._id}`}>Saber más</Link>
            <br />
          </div>
        );
      })} 
    </div>
  );
}

export default AllBeers;
