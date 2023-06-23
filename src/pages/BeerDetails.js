import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const BeerDetails = () => {
  const { id } = useParams();
  const [beerDetails, setBeerDetails] = useState({});
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/${id}`)
      .then((res) => setBeerDetails(res.data))
      .catch((e) => console.log('Error GET details from API............', e));
  }, []);
  return (
    <div className="row d-flex justify-content-center">
      <div
        className="beer-details beer-card d-flex flex-column card px-3"
        style={{ width: '35rem', height: '80vh' }}
      >
        <div
          className="d-flex align-self-center col-1 pt-3"
          style={{ height: '25rem', width: '40rem' }}
        >
          <img
            className="beer-card-img "
            style={{
              'object-fit': 'contain',
              width: '100%',
              height: '100%',
            }}
            src={beerDetails.image_url}
            className="card-img-topc"
            alt={`image of ${beerDetails.name}`}
          />
        </div>
        <div className="card-body text-start text-capitalize ">
          <div className="card-title d-flex row">
            <div className="col-9">
              <h4 className="col">{beerDetails.name}</h4>
              <h6 className="text-black-50">{beerDetails.tagline}</h6>
            </div>
            <div className="col-3 text-center">
              <div className="col fw-medium text-black-50">
                {beerDetails.attenuation_level}
              </div>
              <div className="fw-semibold">{beerDetails.first_brewed}</div>
            </div>
          </div>

          <p className="card-text text-start">
            <p>
              <p>{beerDetails.description}</p>
              <p>
                <span className="text-secondary fw-medium">Created by: </span>
                {beerDetails.contributed_by}
              </p>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};
