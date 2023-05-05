import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function BeerDetailsPage(props) {
  const [selectedBeer, setSelectedBeer] = useState(null);
  const { beerId } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((res) => {
        setSelectedBeer(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [beerId]);

  if (!selectedBeer) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="App">
      <Header />
      {selectedBeer && (
        <div className="image-detailpage-card">
          <div className="image-beer-detail">
            <img src={selectedBeer.image_url} alt="beer" />
          </div>
          <div>
            <h2>{selectedBeer.name}</h2>
            <h2>{selectedBeer.attenuation_level}</h2>
          </div>
          <div>
            <h2>{selectedBeer.tagline}</h2>
            <h2>{selectedBeer.first_brewed}</h2>
          </div>
          <div>
            <p>{selectedBeer.description}</p>
            <p>{selectedBeer.contributed_by}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default BeerDetailsPage;
