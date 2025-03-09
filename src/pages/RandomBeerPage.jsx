import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function BeerDetailsPage() {
 
  const [random, setRandom] = useState(null);
  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((response) => {
        console.log("the response", response.data);
        setRandom(response.data);
      });
  }, []);

  return (
    <div>
      {!random && <h2>loading...</h2>}
      {random && (
        <div className="d-flex justify-content-center p-4 mt-4">
          <div className="card mb-3" style={{ maxWidth: "840px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={random.image_url}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <div className="d-flex justify-content-between ">
                    <h2 className="card-title">{random.name}</h2>
                    <p>{random.attenuation_level}</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h3>{random.tagline}</h3>
                    <p>{random.first_brewed}</p>
                  </div>

                  <p className="card-text mt-4" >
                  {random.description}
                  </p>
                 <p><small>{random.contributed_by}</small></p>
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
