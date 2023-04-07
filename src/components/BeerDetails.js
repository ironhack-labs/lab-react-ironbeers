import NavBar from "./NavBar";
import { useParams } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";
import loadingImage from "../assets/loading.gif";

function BeerDetails() {
  const { id } = useParams();

  const [beer, setBeer] = useState(null);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_APIURL}/${id}`)
      .then((response) => {
        setBeer(response.data);
      })
      .catch((error) => console.log("Error getting Data", error));
  }, [id]);
  console.log(beer);

  return (
    <>
    <nav>
        <NavBar />
      </nav>
      {beer ? (
        <div className="card-details">
          {beer.image_url ? (
            <img src={beer.image_url} alt="" />
          ) : (
            <img src={loadingImage} alt={"Loading"} />
          )}
          <h1 className="beer-details-h1"><span>{beer.name}</span><span className="light-grey">{beer.attenuation_level}</span></h1>
          <p className="beer-details-h1"><span className="light-grey">{beer.tagline}</span><span><b>{beer.first_brewed}</b></span></p>
          <article>{beer.description}</article>
          <p>
            By<i> {beer.contributed_by}</i>
          </p>
        </div>
      ) : (
        <img src={loadingImage} alt={"Loading"} />
      )}
    </>
  );
}
export default BeerDetails;
