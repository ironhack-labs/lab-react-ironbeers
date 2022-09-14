import axios from "axios";
import { useEffect, useState } from "react";

import { Link, useParams, useLocation } from 'react-router-dom';
import HomeBanner from '../../assets/header.png';
import Loading from "../loading/Loading";

import './DetailBeer.css'

function DetailBeer() {

  const location = useLocation();

  const [beer, setBeer] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id ? id : location.pathname.substring(1)}`)
      .then(res => setBeer(res.data))
      .catch(error => console.error(error))
  }, [id, location])

  return (
    <div className="detail-beer">
      <Link to={'/'}>
        <img className="detail-beer__header" src={HomeBanner} alt="Home" />
      </Link>
      {
        beer ?
        <div className="d-flex flex-column align-items-center">
          <img className="detail-beer__picture mt-4" src={beer.image_url} alt={beer.name} />
          <div className="d-flex justify-content-between align-items-center my-2 w-100">
            <h3>{beer.name}</h3>
            <span className="fs-3 text-black-50">{beer.attenuation_level}</span>
          </div>
          <div className="d-flex justify-content-between  my-2 w-100">
            <span className="fs-4 text-secondary">{beer.tagline}</span>
            <span><strong>{beer.first_brewed}</strong></span>
          </div>
          <p className="fw-normal w-100">
            {beer.description}
          </p>
          <span className="fw-bold text-black-50 w-100">{beer.contributed_by}</span>
        </div> :
        <Loading />
      }
    </div>
  );
}

export default DetailBeer;