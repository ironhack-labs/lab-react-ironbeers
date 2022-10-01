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
    <article>
      <div style={{ height: "125px" }}>
        <img style={{ height: "100%" }} src={image_url} alt={name} />
      </div>
      <div>
        <div>
          <h2>{name}</h2>
          <p>{attenuation_level}</p>
        </div>
        <div>
          <h3>{tagline}</h3>
          <p>{first_brewed}</p>
        </div>
        <div>{description}</div>
        <div>{contributed_by}</div>
      </div>
    </article>
  );
}

export default BeerDetails;
