import axios from "axios";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const API_URL = "https://ih-beers-api2.herokuapp.com/beers";

export default function BeerDetailPage() {
  const { id } = useParams();
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`${API_URL}/${id}`);
        setBeer(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);

  return (
    <div>
      <Navbar />
      {beer ? (
        <div className="card row">
          <img
            style={{ height: "400px", width: "200px" }}
            src={beer.image_url}
            alt=""
          />
          <h1>Name: {beer.name}</h1>
          <h2>Tagline: {beer.tagline}</h2>
          <h3>First Brewed: {beer.first_brewed}</h3>
          <p>Description: {beer.description}</p>
        </div>
      ) : (
        <div>
          <h1>No existe esa cerveza</h1>
        </div>
      )}
    </div>
  );
}
