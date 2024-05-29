import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "https://ih-beers-api2.herokuapp.com/beers";

function BeerDetailsPage() {
  const [beer, setBeer] = useState({});
  const { beerId } = useParams();

  useEffect(() => {
    const getBeer = async () => {
      try {
        const response = await axios.get(`${API_URL}/${beerId}`);
        setBeer(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    getBeer();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "40vw",
        textAlign: "center",
        margin: "auto",
        border: "solid, 1px, black",
        padding: "20px",
      }}
    >
      <h1>Beer Details</h1>
      {beer ? (
        <div>
          <img
            src="https://www.melandrose.com/prodimages/11161-DEFAULT-l.jpg"
            alt="beer image"
            style={{
              height: "20vh",
              width: "20vh",
              marginTop: "2vh",
            }}
          />
          <h1>{beer.name}</h1>
          <h3>{beer.tagline}</h3>
          <h3>Attenuation Level: {beer.attenuation_level}</h3>
          <p>Desctiption: {beer.description}</p>
          <p>Created By: {beer.contributed_by}</p>
        </div>
      ) : (
        <p>No beer to show</p>
      )}
      <Link to="/beers">Back</Link>
    </div>
  );
}

export default BeerDetailsPage;
