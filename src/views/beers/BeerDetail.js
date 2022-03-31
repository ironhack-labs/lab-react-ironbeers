import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { beerDetail } from '../../services/BeerService';
import Navbar from '../../components/misc/Navbar'
import './BeerDetail.css';

const BeerDetail = () => {
  const [beer, setBeer] = useState(null);
  const { id } = useParams();

  useEffect(() => {
      beerDetail(id)
      .then(beerResult => {setBeer(beerResult)})
  }, [id]);
  /* console.log(`Me llega esta cerve ${beer}`) */

  return (
    <>
    <Navbar />
    {beer &&
      <div className="beerDetailCard">
  <img src={beer.image_url} className="card-img-top" alt="..." />
  <div className="card-body">
  <p className="card-title text-end fs-5 text-muted">{beer.attenuation_level}</p>
    <h5 className="card-title text-start fs-2">{beer.name}</h5>
    <p className="card-text text-start text-muted">{beer.tagline}</p>
    <p className="card-text text-end fw-bold fs-6">{beer.first_brewed}</p>
    <p className="card-text text-start fw-bold">{beer.description}</p>
    <p className="card-text text-start fs-6 text-muted">{beer.contributed_by}</p>
  </div>
  <div className="card-body">
  </div>
</div>
    }
    </>
  );
};

export default BeerDetail;
