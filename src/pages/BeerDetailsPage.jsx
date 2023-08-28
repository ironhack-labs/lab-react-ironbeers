import {useParams, Link} from "react-router-dom"
import {useState, useEffect} from "react"
import axios from "axios"
import React from "react"


const BeerDetailsPage = () => {
    const {beerId} = useParams()
    const [beerDetails, setBeerDetails] = useState(null)

    useEffect(() => {
        axios
          .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
          .then((response) => {
            setBeerDetails(response.data);
          })
          .catch((error) => {
            console.error('Error fetching beer details:', error);
          });
      }, [beerId]);

      if (!beerDetails) {
        return <div>Loading...</div>;
      }
    

      const {
        image_url,
        name,
        tagline,
        first_brewed,
        attenuation_level,
        description,
        contributed_by
      } = beerDetails;

      return (
        <div className="beer-details-container">
    <img src={image_url} alt={name} className="beer-image" />
      <h1>{name}</h1>
      <p>{tagline}</p>
      <p>First Brewed: {first_brewed}</p>
      <p>Attenuation Level: {attenuation_level}</p>
      <p>Description: {description}</p>
      <p>Created by: {contributed_by}</p>

        </div>
      )
      }

export default BeerDetailsPage;
