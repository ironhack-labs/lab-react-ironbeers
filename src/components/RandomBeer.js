import NavBar from "./NavBar";
import { useParams } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import loadingImage from "../assets/loading.gif"
import axios from "axios";

function RandomBeer() {
    const { id } = useParams();

    const [beer, setBeer] = useState(null);
    useEffect(() => {
      axios
        .get(`${process.env.REACT_APP_APIURL}/random`)
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
export default RandomBeer;
