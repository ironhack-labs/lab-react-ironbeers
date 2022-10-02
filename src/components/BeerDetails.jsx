function BeerDetails({ beerInfo }) {
  const {
    image_url,
    name,
    tagline,
    first_brewed,
    attenuation_level,
    description,
    contributed_by,
  } = beerInfo;

  return (
    <article className="beer-detail">
      <img src={image_url} alt={name} />
      <div>
        <div className="info-details">
          <h2 className="beer-name">{name}</h2>
          <p className="attenuation">{attenuation_level}</p>
        </div>
        <div className="info-details">
          <h3>{tagline}</h3>
          <p>
            <strong>{first_brewed}</strong>
          </p>
        </div>
        <div className="description">{description}</div>
        <div className="contributor">{contributed_by}</div>
      </div>
    </article>
  );
}

export default BeerDetails;
