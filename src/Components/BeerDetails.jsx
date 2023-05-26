function BeerDetails(props) {
    return (
      <div className="BeerDetails">
        <img src={props.beer.image_url}/>
        <h3>{props.beer.name}</h3>
        <p>{props.beer.tagline}</p>
        <p>First Brewed in: {props.beer.first_brewed}</p>
        <p>Attenuation Level: {props.beer.attenuation_level}</p>
        <p>{props.beer.description}</p>
      </div>
    );
  }
   
  export default BeerDetails;