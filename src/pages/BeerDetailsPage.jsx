import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BeerDetailsPage() {
  const { beerId } = useParams();
  const [beer, setBeer] = useState([]);
  useEffect(() => {
    console.log(beerId);

    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((indivudialBeer) => {
        console.log(indivudialBeer.data);

        setBeer(indivudialBeer.data);

        console.log(beer);
      })
      .catch(() => {});
  }, []);
  return (
    <>
      <div style={{ textAlign: "center", color: "#80461b", marginTop: "10px" }}>
        Beer Details Page
      </div>

      <div className="beer-details-container">
        <ul>
          <li
            key={beer.id}
            className="each-beer-detail-item"
            style={{ listStyleType: "none" }}
          >
            <img src={beer.image_url} alt="Beer" />

            <div className="middle">
              <p>
                <span>Name: </span> <span>{beer.name}</span>
              </p>
              <p>
                <span>TagLine:</span> <span>{beer.tagline}</span>
              </p>
              <p>
                <span>First brewed:</span> <span>{beer.first_brewed}</span>
              </p>
              <p>
                <span>Attenuation level: </span>
                <span>{beer.attenuation_level}</span>
              </p>
              <p>
                <span>Description: </span>
                <span>{beer.description}</span>
              </p>
              <p>
                <span>Contributed By:</span>
                <span>{beer.contributed_by} </span>
              </p>
            </div>
          </li>

          <div
            style={{ border: "1px solid teal", margin: "5px 0px 0px 0px" }}
          ></div>
        </ul>
      </div>
    </>
  );
}

export default BeerDetailsPage;
