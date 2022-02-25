function SingleBeerDetails(props) {
  return (
    <div className="container-fluid d-flex flex-column justify-content-around align-items-center beer-details">
      <img
        className="single-beer-img"
        src={props.beer.image_url}
        alt={props.beer.name}
      ></img>
      <div className="container-fluid d-flex justify-content-around align-items-center">
        <div className="container-fluid d-flex flex-column justify-content-around align-items-start">
          <h4>{props.beer.name}</h4>
          <p className="tagline left grey">{props.beer.tagline}</p>
        </div>
        <div className="container-fluid d-flex flex-column justify-content-around align-items-end">
          <h4 className="grey">{props.beer.attenuation_level}</h4>
          <p className="tagline">{props.beer.first_brewed}</p>
        </div>
      </div>
      <p className="left">{props.beer.description}</p>
      <p className="grey">{props.beer.contributed_by}</p>
    </div>
  );
}

export default SingleBeerDetails;
