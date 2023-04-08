import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function RandomBeer() {
  const { Id } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_APIURL + "/random")
      .then((response) => {
        setDetails(response.data);
      })
      .catch((e) => {
        console.log("error getting Beer details by ID from API....", e);
      });
  }, [Id]);
  console.log(details);

  function renderDetails() {
    return (
      <>
        <header>
          <Link to={"/"}>Home</Link>
        </header>
        <h1>Beers Details</h1>
        <img src={details.image_url} alt={details.name} />
        <br />
        <p>{details.name ?? ""}</p>
        <br />
        <p>{details.tagline ?? ""}</p>
        <p>First Brewed: {details.first_brewed ?? ""}</p>
        <p>Attenuation Level: {details.attenuation_level ?? ""}</p>
        <br />
        <p>Description</p>
        <br />
        <p>{details.description ?? ""}</p>
        <br />
        <p>Contributed by: </p>
        <p>{details.contributed_by ?? ""}</p>
      </>
    );
  }
  return <>{details ? renderDetails() : "loading..."}</>;
}

export default RandomBeer;
