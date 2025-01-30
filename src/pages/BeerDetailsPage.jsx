import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function BeerDetailsPage() {
  const { beerId } = useParams();
  console.log("the id-->", beerId);
  const [details, setDetails] = useState(null);
  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        console.log("the response", response.data);
        setDetails(response.data);
      });
  }, [beerId]);

  return (
    <div>
      {!details && <h2>loading...</h2>}
      {details && (
        <div className="d-flex justify-content-center p-4 mt-4">
          <div className="card mb-3" style={{ maxWidth: "840px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={details.image_url}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <div className="d-flex justify-content-between ">
                    <h2 className="card-title">{details.name}</h2>
                    <p>{details.attenuation_level}</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h3>{details.tagline}</h3>
                    <p>{details.first_brewed}</p>
                  </div>

                  <p className="card-text mt-4" >
                  {details.description}
                  </p>
                 <p><small>{details.contributed_by}</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BeerDetailsPage;
