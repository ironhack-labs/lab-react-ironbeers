import { useNavigate } from "react-router-dom";

function BeerDetailsCard({ beer }) {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="container-md my-3" style={{ maxWidth: "35rem" }}>
      <div className="d-flex justify-content-center">
        <img className="img-fluid" src={beer.image_url} alt="beer" style={{ width: "20rem" }} />
      </div>
      <div className="d-flex align-items-center flex-column">
        <h4>{beer.name}</h4>
        <p>{beer.tagline}</p>
        <p>Attenuation level: {beer.attenuation_level}</p>
        <p>{beer.description}</p>
        <p className="fw-medium">Created by: {beer.contributed_by}</p>
        <button className="btn btn-primary mb-5 fw-semibold" onClick={handleBack}>
          Back
        </button>
      </div>
    </div>
  );
}

export default BeerDetailsCard;
