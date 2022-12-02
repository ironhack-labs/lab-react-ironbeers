import { useParams } from 'react-router-dom'

const SingleBeer = (props) => {
  const { id } = useParams();
  let foundBeer = ""
  props.beers ? foundBeer = props.beers.find((beer) => { return beer._id === id }) : foundBeer = props.randBeer 


  return (
    <>
    {foundBeer ?
    <div className="card" >
      <img className="list-img" src={foundBeer.image_url} alt="Card cap"/>
      <div className="card-body">
        <p>{foundBeer.name}</p>
        <p className="card-text">{foundBeer.tagline}</p>
        <p className="card-text">Contributor: {foundBeer.contributed_by}</p>
        <p>First brewed: {foundBeer.first_brewed}</p>
        <p>Attenuation: {foundBeer.attenuation_level}</p>
        <p>{foundBeer.description}</p>
      </div>
    </div> : <p>loading...</p>
    }
    </>
  )
}

export default SingleBeer
