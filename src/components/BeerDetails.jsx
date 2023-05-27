function BeerDetails({ details }) {
  return (
    <div>
      <img src={details.image_url} alt="foto-beer" width={150}></img>
      <div>
        <h3>{details.name}</h3>
        <h3>{details.attenuation_level}</h3>
      </div>
      <div>
        <h4>{details.tagline}</h4>
        <h4>{details.first_brewed}</h4>
      </div>
      <div>
        <p>{details.description}</p>
        <span>{details.contributed_by}</span>
      </div>
    </div>
  );
}

export default BeerDetails;
