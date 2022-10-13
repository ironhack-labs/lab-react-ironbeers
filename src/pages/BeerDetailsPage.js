import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BeerDetailsPage = () => {
  const { beerId } = useParams();
  const [beer, setBeer] = useState([]);
  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((res) => setBeer(res.data))
      .catch((err) => console.log(err));
  }, [beerId]);

  const {
    image_url,
    name,
    attenuation_level,
    tagline,
    first_brewed,
    description,
    contributed_by,
  } = beer;

  return (
    <div className="py-5 px-5">
      {beer && (
        <>
          <div className="row w-100">
            <div>
              <img src={image_url} width="50px" alt={name} />
            </div>
          </div>
          <div className="row w-100">
            <h2 className="col-10 text-start">{name}</h2>
            <h2 className="col-2 text-end text-black-50">
              {attenuation_level}
            </h2>
          </div>
          <div className="row w-100">
            <h6 className="col-10 text-start text-black-50">{tagline}</h6>
            <h6 className="col-2 text-end fw-bold">{first_brewed}</h6>
          </div>
          <div className="row w-100">
            <p className="col-12 text-start">{description}</p>
          </div>
          <div className="row w-100">
            <small className="col-12 text-start fw-bold text-black-50">
              {contributed_by}
            </small>
          </div>
        </>
      )}
    </div>
  );
};

export default BeerDetailsPage;
