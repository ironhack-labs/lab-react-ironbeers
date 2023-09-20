import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import '../pages/SingleBeer.css';

function SingleBeer() {
  const [singleBeer, setSingleBeer] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`).then((response) => {
      console.log(response.data);
      setSingleBeer(response.data);
    });
  }, [id]);

  if (!singleBeer) return <p>Loading...</p>;

  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="single-beer-wrapper">
        <img src={singleBeer.image_url} alt="beer" />
        <div className="single-beer-content-container">
          <div className="single-beer-name-container">
            <h1>{singleBeer.name}</h1>
            <h2 className="color-grey">{singleBeer.tagline}</h2>
          </div>
          <div className="single-beer-info-container">
            <h2 className="color-grey">{singleBeer.attenuation_level}</h2>
            <h2>{singleBeer.first_brewed}</h2>
          </div>
        </div>
        <div className="single-beer-description-container">
          <h2>{singleBeer.description}</h2>
          <h3 className="color-grey">{singleBeer.contributed_by}</h3>
        </div>
      </div>
    </div>
  );
}

export default SingleBeer;
