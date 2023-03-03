import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function AllBeers() {
  const [allBeers, setAllBeers] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      //   console.log(response);
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
          <div key={cadaCerveza._id}>
            <img src={cadaCerveza.image_url} alt="" width="100px" />
            <h5>{cadaCerveza.name}</h5>
            <h6>{cadaCerveza.tagline}</h6>
            <p>{cadaCerveza.contributed_by}</p>
          </div>
        );
      })}
    </div>
  );
}

export default AllBeers;
