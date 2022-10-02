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
    <article class="beer-detail">
      <img src={image_url} alt={name} />
      <div>
        <div class="info-details">
          <h2 class="beer-name">{name}</h2>
          <p class="attenuation">{attenuation_level}</p>
        </div>
        <div class="info-details">
          <h3>{tagline}</h3>
          <p>
            <strong>{first_brewed}</strong>
          </p>
        </div>
        <div class="description">{description}</div>
        <div class="contributor">{contributed_by}</div>
      </div>
    </article>
  );
}

export default BeerDetails;
