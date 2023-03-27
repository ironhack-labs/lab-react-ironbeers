import "./SingleBeer.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SingleBeer({ beers }) {
  const { beerId } = useParams();
  const [selectedBeer, setSelectedBeer] = useState(null);

  useEffect(() => {
    const beer = beers.find((beer) => {
      return beer._id === beerId;
    });
    if (beer) setSelectedBeer(beer);
  }, [beers, beerId]);

  return (
    <div className="single-beer">
      {!selectedBeer ? (
        <h3> beer not found</h3>
      ) : (
        <>
          <div key={selectedBeer._id} className="image-container">
            <img
              className="single-beer-img"
              src={selectedBeer.image_url}
              alt="the-beer"
            />
          </div>

          <div className="main-info">
            <div className="featured">
              <h1> {selectedBeer.name} </h1>
              <p> {selectedBeer.tagline}</p>
            </div>
            <div className="date">
              <h4>{selectedBeer.attenuation_level}</h4>
              <p>
                <b>{selectedBeer.first_brewed}</b>
              </p>
            </div>
          </div>
          <div className="beer-description">
            <p> {selectedBeer.description}</p>
            <p>{selectedBeer.contributed_by}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default SingleBeer;
