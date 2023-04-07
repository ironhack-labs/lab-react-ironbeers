import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

function BeerDetails() {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/${id}`)
      .then((response) => {
        setDetails(response.data);
      })
      .catch((e) => {
        console.log("error", e);
      });
  }, [id]);
  function renderDetails() {
    return (
      <div className="beersDiv">
      <Navbar />
        <br/>
        <img src={details.image_url} alt="beerImg" />
        <h1>{details.name}</h1>
        <p>{details.tagline}</p>
        <p>{details.first_brewed}</p>
        <p>{details.attenuation_level}</p>
        <p>{details.description}</p>
        <p>{details.contributed_by}</p>
      </div>
    );
  }
  return(
    <>
    { details  ? renderDetails() : "loading..."}
    </>
    )
}
export default BeerDetails;
