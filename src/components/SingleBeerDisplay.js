function SingleBeerDisplay({ singleBeer }) {
  return (
    <div className="singleBeerPage">
      <img src={singleBeer.image_url} alt={singleBeer.name} />
      <div className="singleBeerPageText">
        <h2>
          {singleBeer.name} <span>{singleBeer.attenuation_level}</span>
        </h2>
        <h4 style={{ color: "grey" }}>
          {singleBeer.tagline}
          <span>{singleBeer.first_brewed}</span>
        </h4>
        <p>{singleBeer.description}</p>
        <p style={{ fontWeight: "lighter" }}>{singleBeer.contributed_by}</p>
      </div>
    </div>
  );
}

export default SingleBeerDisplay;
