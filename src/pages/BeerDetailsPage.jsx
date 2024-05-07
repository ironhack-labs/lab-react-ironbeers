import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { Link } from "react-router-dom"
const apiURL = "https://ih-beers-api2.herokuapp.com"


function BeerDetailsPage() {



  const [beer, setBeer] = useState({})

  const { beerId } = useParams()

  const navigate = useNavigate()

  useEffect(() => {

    loadBeerDetails()
  }, [])


  const loadBeerDetails = () => {
    axios
      .get(`${apiURL}/beers/${beerId}`)
      .then(response => {
        setBeer(response.data)
      })
      .catch(err => console.log(err))
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

          <Link to={`/beers/${beerId}/edit`}>
            <button
              className="btn btn-primary"
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
