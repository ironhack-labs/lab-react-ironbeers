import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const API_URL = "https://ih-beers-api2.herokuapp.com";

function BeerDetailsPage() {
  const [beer, setBeer] = useState({});

  const navigate = useNavigate();

  const { beerId } = useParams();

  useEffect(() => {
    getBeerDetails();
  }, []);

  const getBeerDetails = () => {
    axios
      .get(`${API_URL}/beers/${beerId}`)
      .then(({ data }) => setBeer(data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="d-inline-flex flex-column justify-content-center align-items-center w-100 p-4">
      {beer && (
        <>
          <img
            src={beer.image_url}
            alt="Beer Image"
            height="300px"
            width="auto"
          />
          <h3>{beer.name}</h3>
          <p>{beer.tagline}</p>
          <p>Attenuation level: {beer.attenuation_level}</p>
          <p>Description: {beer.description}</p>
          <p>Created by: {beer.contributed_by}</p>

          <button
            className="btn btn-primary"
            onClick={() => {
              navigate(-1);
            }}
          >
            Back
          </button>

          <Link to={`/edit/${beerId}`}>
            {" "}
            <button
              className="btn btn-edit"
              onClick={() => {
                navigate(`/edit/:beerId`);
              }}
            >
              Edit
            </button>
          </Link>
        </>
      )}
    </div>
  );
}

export default BeerDetailsPage;
