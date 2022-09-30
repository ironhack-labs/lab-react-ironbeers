import './BeerDetail.css';
import { React, useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { fetchOneBeer, fetchRandomBeer } from '../../services/beers-service';

export default function BeerDetail() {
    const [beer, setBeer] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    const getOneBeer = async () => {   
      const beer = await fetchOneBeer(id);
      setBeer(beer.data);        
      setLoading(false);          
    }

    const getRandomBeer = async () => {   
      const randomBeer = await fetchRandomBeer();
      setBeer(randomBeer.data);        
      setLoading(false);          
    }

    useEffect(() => {
      if(id) {
        getOneBeer()
      } else {
        getRandomBeer()
      }      
    },[id])
      
  return loading ? (
    "Loading..."
  ) : (
    <div className="Beer-detail-container">
      <div className="Beer-img-container">
        <img src={beer.image_url} alt="beer"></img>
      </div>
      <div className="Beer-info-container">
        <div className="Beer-title-container">
          <h2>{beer.name}</h2>
          <h2 className='Attenuation-level'>{beer.attenuation_level}</h2>
        </div>
        <div className="Beer-subtitle-container">
          <h5 className='Tagline'>{beer.tagline}</h5>
          <h5>{beer.first_brewed}</h5>
        </div>
        <p>{beer.description}</p>
        <strong>
          Created by:{" "}
          {beer.contributed_by
            .replace("<samjbmason>", "")
            .replace("<AliSkinner>", "")}
        </strong>
      </div>
    </div>
  );
}

