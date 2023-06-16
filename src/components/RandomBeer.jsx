function Beer({ randomBeer }) {
  console.log("random beer", randomBeer);
  return (
    <div className="oneBeer">
      <img
        className="beerImg"
        src={randomBeer.image_url}
        alt={randomBeer.name}
      />
      <div className="oneBeerName">
        <h1>{randomBeer.name}</h1>
        <p>{randomBeer.attenuation_level}</p>
      </div>
      <div className="oneBeerTagLine">
        <h2>{randomBeer.tagline}</h2>
        <p>{randomBeer.first_brewed}</p>
      </div>
      <div className="oneBeerdescription">
        <p>{randomBeer.description}</p>
      </div>
      <div className="oneBeerContributedBy">
        <p>{randomBeer.contributed_by}</p>
      </div>
    </div>
  );
}

export default Beer;
