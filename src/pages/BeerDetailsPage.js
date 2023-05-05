import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

function BeerDetailsPage(props) {
  const [foundBeer, setFoundBeer] = useState(null)

  const { beerId } = useParams()

  useEffect(() => {
    const beer = props.beers.find(beerObj => {
      return beerObj._id === beerId
    })

    if (beer) {
      setFoundBeer(beer)
    }
  }, [beerId])

  return (
    <div>
      <h1>Beer Details</h1>
      {!foundBeer && <h3>Beer not found!</h3>}

      {foundBeer && (
        <>
          <img src={foundBeer.image_url} alt="Beer"/>
          <h2>{foundBeer.name}</h2>
          <h3>{foundBeer.tagline}</h3>
          <p>{foundBeer.first_brewed}</p>
          <p>{foundBeer.attenuation_level}</p>
          <p>{foundBeer.description}</p>
          <p>{foundBeer.contributed_by}</p>
          <Link to="/beers">Back</Link>
        </>
      )}
    </div>
  )
}

export default BeerDetailsPage
