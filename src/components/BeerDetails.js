import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function BeerDetails(props) {
  const [details, setDetails] = useState(null);
  const [fetching, setFetching] = useState(true);

  const { beerId } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        console.log("response.data", response.data);
        setDetails(response.data);
        setFetching(false);
      });
  }, [beerId]);

  return (
    <>
      <header>
        <Link to="/">
          <i>home</i>
        </Link>
      </header>
        {fetching && <div></div>}
        {details && (
          <>
            <div key={details._id}>
              <img src={details.image_url} style={{ height: "300px" }} alt="" />
              <h4>{details.name}</h4>
              IBU: {details.ibu}
              <h5>{details.tagline}</h5>
              <strong>
                First brewed: <br />
                {details.first_brewed}
              </strong>
              {details.description}
            </div>
            Contributed by: <br />
            {details.contributed_by}
          </>
        )}  
    </>
  );
}

export default BeerDetails;
