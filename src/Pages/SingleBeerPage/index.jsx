/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useState, useEffect,  } from "react";

import Header from "../Components/NavBar/index";
import { useParams } from "react-router-dom";

function SingleBeer() {
  const [singleBeer, setSingleBeer] = useState([]);
  const { id } = useParams();


  useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
    .then((response) => {
      console.log("response.data", response.data);
      setSingleBeer(response.data);
    })
    .catch((error) => {
      console.error("Error fetching single beer:", error);
    });
  }, []);
  return (
    <div>
      <Header />
      {singleBeer && (
        <div>
          <div key={singleBeer._id} className="single-beer-card">
            <div className="single-beer-img">
              <img src={singleBeer.image_url} alt="beer" />
            </div>
            <div className="single-beer-info">
              <div>
                <h3>{singleBeer.name}</h3>
                <h3>{singleBeer.attenuation_level}</h3>
              </div>
              <div>
                <h2>{singleBeer.tagline}</h2>
                <h2>{singleBeer.first_brewed}</h2>
              </div>
              <p>{singleBeer.description}</p>
              <p>{singleBeer.contributed_by}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleBeer;