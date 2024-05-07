import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const API_URL = "https://ih-beers-api2.herokuapp.com/beers"

function BeerDetailsPage() {

  const [beer, setBeer] = useState([0]);

  const { beerId } = useParams()
  const navigate = useNavigate()



  useEffect(() => {
    eachBeerDetails()
  }, [])

  const eachBeerDetails = () => {
    axios
      .get(`${API_URL}/${beerId}`)
      .then(({ data }) => setBeer(data))
      .catch((error) => console.log(error))
  }


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


          <Link to={`/edit/${beerId}`} ><button
            className="btn btn-primary"
            onClick={() => {
              navigate(`/edit/:beerEdit`);
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
