import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const apiURL = 'https://ih-beers-api2.herokuapp.com/beers'



function BeerDetailsPage() {

  const [beer, setBeer] = useState();

  const navigate = useNavigate();

  const { beerId } = useParams()


  useEffect(() => {
    loadOneBeer()
  }, [])

  const loadOneBeer = () => {
    axios
      .get(`${apiURL}/${beerId}`)
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

          <Link to={`/edit/${beerId}`}>
            <button>Edit</button>
          </Link>

          <button
            className="btn btn-primary"
            onClick={() => {
              navigate(-1);
            }}
          >
            Back
          </button>
        </>
      )}
    </div>
  );
}

export default BeerDetailsPage;
