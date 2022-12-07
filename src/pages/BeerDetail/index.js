import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import BeerInfo from '../../components/BeerInfo';
import Navbar from '../../components/Navbar';

const apiURL = "https://ih-beers-api2.herokuapp.com/beers";

const BeerDetail = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const {
    image_url,
    name,
    tagline,
    first_brewed,
    attenuation_level,
    description,
    contributed_by
  } = details;

  useEffect(() => {
    const getDetails = async () => {
      try {
        const detailRes = await axios.get(`${apiURL}/${id}`);
        setDetails(detailRes.data);
      }
      catch (err) {
        console.log(err);
      }
    }
    getDetails();
  }, [id]);

  return (
    <div>
      <Navbar/>
      <BeerInfo
        image_url={image_url}
        name={name}
        tagline={tagline}
        first_brewed={first_brewed}
        attenuation_level={attenuation_level}
        description={description}
        contributed_by={contributed_by}
      />
    </div>
  );
}

export default BeerDetail;