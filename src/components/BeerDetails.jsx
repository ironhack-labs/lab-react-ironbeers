export default function BeerDetails(props) {
  const {beer} = props


  if (Object.keys(beer).length === 0) {
    return <span>Fetching a beer for you ;)</span>
  }
  
  return (
    <div className="beer-details">

      <img src={beer.image_url} alt="bottle" />
      <h3>{beer.name}</h3>
      <h4>{beer.tagline}</h4>
      <span>First brewed: {beer.first_brewed}</span>
      <span>Attenuation level: {beer.attenuation_level}</span>
      <p>{beer.description}</p>
      <span>{beer.contributed_by}</span>

    </div>
  )
}
