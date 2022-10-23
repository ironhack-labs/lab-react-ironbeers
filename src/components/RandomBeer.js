import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import SyncLoader from "react-spinners/SyncLoader";
import "./RandomBeer.css";

function RandomBeer({ beers }) {
  const [beer, setBeer] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "/beers/random")
      .then((response) => {
        setLoading(false);
        setBeer(response.data);
      })
      .catch((e) => console.log("error getting beers from API", e));
  }, []);

  return (
    <div>
      <Header />
      <SyncLoader
        loading={loading}
        size={15}
        aria-label='Loading Spinner'
        data-testid='loader'
      />
      <div
        className='card d-flex align-items-center justify-content-center'
        style={{ width: "30rem" }}
      >
        <img
          src={beer && beer.image_url}
          className='card-img-top'
          alt={beer && beer.name}
        />
        <div className='card-body'>
          <div className='d-flex justify-content-between'>
            <h5 className='card-title'>{beer && beer.name}</h5>
            <h5 className='card-title' style={{ color: "grey" }}>
              {beer && beer.attenuation_level}
            </h5>
          </div>
          <div className='d-flex justify-content-between'>
            <p className='card-text' style={{ color: "grey" }}>
              {beer && beer.tagline}
            </p>
            <p className='card-text'>
              <span style={{ fontWeight: "bold" }}>
                {beer && beer.first_brewed}
              </span>
            </p>
          </div>
          <p className='card-text'>
            <span style={{ fontWeight: "bold" }}>
              {beer && beer.description}
            </span>
          </p>
          <p className='card-text' style={{ color: "grey" }}>
            {beer && beer.contributed_by}
          </p>
        </div>
      </div>
    </div>
  );
}

export default RandomBeer;
