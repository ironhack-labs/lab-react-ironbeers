function BeerDetailCard(props) {

  return (
    <div className="beerdetailcard">
      <img className="responsive" src={props.image_url} alt="" />
      <div className="beerdetailtitle">
        <h2>{props.name}</h2>
        <h2>{props.abv}</h2>
      </div>
      <div className="beerdetailsubtitle">
        <h4>{props.tagline}</h4>
        <p><b>{props.first_brewed}</b></p>
      </div>
      <div className="beerdetaildescrip">
        <p>{props.description}</p>
        <p>{props.contributed_by}</p>
      </div>
    </div>
  )
}

export default BeerDetailCard;