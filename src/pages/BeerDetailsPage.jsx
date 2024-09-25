import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import beersJSON from "./../assets/beers.json";
import axios from "axios";
import defaultBeerImage from '../assets/DefaultBeer.jpg'


function BeerDetailsPage() {
  
 
  const url="https://ih-beers-api2.herokuapp.com/beers"

  const [beer, setBeer] = useState(null);
  const [isImageLoading, setIsImageLoading] = useState(true);

  const {beerId} = useParams()
  const navigate = useNavigate();

  const handleImageLoad = () => {
    setIsImageLoading(false);
  };

  const handleImageError = () => {
    let clone = structuredClone(beer);
    clone.image_url = defaultBeerImage;
    setBeer(clone)
    setIsImageLoading(false);
  };
  
  const getSingleBeer = async ()=>{
    try {
      const response = await axios.get(`${url}/${beerId}`)            
      setBeer(response.data)
      }
    catch (error) {
      console.log(error)
    }
  }


  useEffect(()=>{
    getSingleBeer()
    return ()=>{}
  }, [beerId])

  if (beer === null){
    return (<h3>...loading</h3>)
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
            onLoad={handleImageLoad}
            onError={(handleImageError)}
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
        </>
      )}
    </div>
  );
}

export default BeerDetailsPage;
