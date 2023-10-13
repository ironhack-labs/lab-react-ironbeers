import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BeerDetailsPage({ randomId }) {
  const param = useParams();
  const id = randomId ? randomId : param.id;
  const [data, setData] = useState(null);
  useEffect(() => {
    const url = `https://ih-beers-api2.herokuapp.com/beers/${id}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error in API:", error);
      });
  }, []);
  return (
    <>
      {data === null ? (
        <div className="text-center mt-5">
          <div className="spinner-border text-info" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="card mb-3 border-0">
          <div className="d-flex justify-content-center mt-5">
            <img
              src={data.image_url}
              className="card-img-top"
              alt={`Image beer ${data.name}`}
              style={{ height: "300px", width: "auto" }}
            />
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col">
                <h5 className="fs-1 fw-medium pb-1 mb-3">{data.name}</h5>
                <p className="text-body-secondary ">{data.tagline}</p>
              </div>

              <div className="col col-lg-3 text-end">
                <p className="text-body-tertiary fs-2 fw-bolder">
                  {data.attenuation_level}
                </p>
                <p className="fw-bolder">{data.first_brewed}</p>
              </div>
            </div>

            <p className="lh-1 fw-semibold">{data.description}</p>
            <p>
              <small className="text-body-secondary fw-bolder">
                {data.contributed_by}
              </small>
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default BeerDetailsPage;

BeerDetailsPage.defaultProps = {
  randomId: null,
};
