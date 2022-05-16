function BeerDetail(props) {
  const {
    image_url,
    name,
    attenuation_level,
    tagline,
    first_brewed,
    description,
    contributed_by,
  } = props.beer;

  return (
    <div className="d-flex justify-content-center">
      <div className="card" style={{ width: "25rem" }}>
        <img className="card-img-top" src={image_url} alt="" />
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h2 className="card-title">{name}</h2>
            <h3 className="card-text">{attenuation_level}</h3>
          </div>
          <div className="d-flex justify-content-between">
            <p className="card-text">{tagline}</p>
            <p className="card-text">{first_brewed}</p>
          </div>
          <p className="card-text">{description}</p>
          <p className="card-text">{contributed_by}</p>
        </div>
      </div>
    </div>
  );
}

export default BeerDetail;
