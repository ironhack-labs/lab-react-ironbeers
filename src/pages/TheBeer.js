import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import '../css/theBeer.css';

function TheBeer() {
  const navigate = useNavigate();
  const [theBeer, setTheBeer] = useState(false);
  const { beerId } = useParams();

  useEffect(() => {
    const fetchBeer = async () => {
      const apiUrl = 'https://ih-beers-api2.herokuapp.com/beers/' + beerId;

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setTheBeer(data);
      } catch (err) {
        console.log(err);
        setTheBeer(false);
      }
    };

    fetchBeer();
  }, [beerId]);

  return (
    theBeer && (
      <div className="theBeer">
        <div className="theBeer__container">
          <div className="theBeer__img">
            <img src={theBeer.image_url} alt={theBeer.name} />
          </div>
          <div className="theBeer__header">
            <div className="theBeer__header-left">
              <div className="theBeer__header-left-title">{theBeer.name}</div>
              <div className="theBeer__header-left-tagLine">
                {theBeer.tagline}
              </div>
            </div>
            <div className="theBeer__header-right">
              <div className="theBeer__header-right-level">
                {theBeer.attenuation_level}
              </div>
              <div className="theBeer__header-right-date">
                {theBeer.first_brewed}
              </div>
            </div>
          </div>
          <div className="theBeer__description">{theBeer.description}</div>
          <div className="theBeer__createdBy">{theBeer.contributed_by}</div>
          <div>
            <div className="back" onClick={() => navigate(-1)}>
              Back
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default TheBeer;
