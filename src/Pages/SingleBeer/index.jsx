import { useParams, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function SingleBeer(props) {
  const [beer, setBeer] = useState([]);
  const { id } = useParams();

  console.log("id", id);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((response) => {
        console.log("response.data", response.data);
        setBeer(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  return (
    <div>
      <NavLink />
      {beer && (
        <div key={beer._id}>
          <img src={beer.image_url} />
          <h3>{beer.name}</h3>
          <h3>{beer.attenuation_level}</h3>
          <h4>{beer.tagline}</h4>
          <h4>{beer.first_brewed}</h4>
          <h5>{beer.description}</h5>
          <h5>{beer.contributed_by}</h5>
        </div>
      )}
    </div>
  );
}

export default SingleBeer;
