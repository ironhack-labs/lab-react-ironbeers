import {useParams} from "react-router-dom"
import Navbar from "../components/Navbar";
import {Link} from "react-router-dom"

function Beer({beers}) {
    const {beerId} = useParams()
    const [beer] = beers.filter(drink => drink._id === beerId);

  return (
    <div>
      <Navbar />
      <div className="container">
      <div className="card beer">
        <div className="img-box">
          <img src={beer.image_url} alt="beer" className='beer-img'/>
        </div>
        <div>
          <h2>{beer.name}</h2>
          <h4>{beer.tagline}</h4>
          <p>{beer.first_brewed}</p>
          <p>{beer.attenuation_level}</p>
          <p>{beer.description}</p>
          <p>{beer.contributed_by}</p>
          <Link to="/beers" className="go-back-link">Go back</Link>
        </div>
      </div>

      </div>

    </div>
  )
}

export default Beer