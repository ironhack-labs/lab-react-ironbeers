function BeerCard(props) {
  const {beerData: {
    image_url: imageUrl,
    name,
    tagline,
    first_brewed: firstBrew,
    attenuation_level: attnLevel,
    description,
    contributed_by: contributed
  } } = props
  const {detailed} = props


  return (
    <div className={detailed ? "card detailed-card" : "no-detailed-card"}>
      <div className="img-container">
        <img src={imageUrl} className="card-img-top" alt="beer-img" />
      </div>
      <div className="card-body">
        <h5 className="card-title">
          {name} {detailed && attnLevel}
        </h5>
        <small className="text-body-secondary">
          {tagline} {detailed && firstBrew}
        </small>
        <p className="card-text">{detailed && description}</p>
        <p className="card-text">
          <small className="text-body-secondary">{detailed && contributed}</small>
        </p>
      </div>
    </div>
  )
}

export default BeerCard