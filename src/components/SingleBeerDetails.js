import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "./Header";
import { useEffect, useState } from "react";
import axios from "axios";
import "./SingleBeerDetails.css";

function SingleBeerDetails() {
  const { beerId } = useParams();

  const navigate = useNavigate();

  const [details, setDetails] = useState({});

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/beers/${beerId}`)
      .then((response) => {
        setDetails(response.data);
      })
      .catch((e) => console.log(e));
  }, [beerId]); //add beerID here

  return (
    <section>
      <Header />
      <h1>Learn More about {details.name}</h1>
      <div></div>
      <p>
        <img src={details.image_url} alt={details.name} className="image" />
      </p>
      <em>{details.tagline}</em>
      <br />
      <br />
      <table className="table">
        {/* <tr className="textAlign">
          <th>Attenuation Level: </th>
          <td>{details.attenuation_level}</td>
        </tr> */}
        <tr className="textAlign">
          <th>Description</th>
          <td>{details.description}</td>
        </tr>
        <tr className="textAlign">
          <th>First Brew Date</th>
          <td>{details.first_brewed}</td>
        </tr>
        <tr className="textAlign">
          <th>Created by</th>
          <td>{details.contributed_by}</td>
        </tr>
      </table>
      <p>
        <Link to="/beers">Go Back to Beer List</Link>
      </p>
    </section>
  );
}

export default SingleBeerDetails;
