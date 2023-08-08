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
          {name} <span>{detailed && attnLevel}</span>
        </h5>
        <div className="tagline-container">
          <small className="text-body-secondary">{tagline}</small>
          <small>
            <b>{detailed && firstBrew}</b>
          </small>
        </div>
        <p className="card-text details">{detailed && description}</p>
        <p className="card-text">
          <small className="text-body-secondary">
            <b>{!detailed && "Created by: "}</b>
            {!detailed && contributed.replace(/<[^>]+>/g, "")}
            {detailed && contributed}
          </small>
        </p>
      </div>
    </div>
  )
}

export default BeerCard