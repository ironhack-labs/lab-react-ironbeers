import beers from "./assets/beers.png"
import randomBeer from "./assets/random-beer.png"
import newBeer from "./assets/new-beer.png"
import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <div className="HomePage">
      <div>
        <img src={beers} alt="beers" />
        <div className="p-3">
          <Link className="d-flex text-decoration-none link-dark" to={`/list`}>
            <h1>All Beers</h1>
          </Link>
          <p>Check all our beers</p>
        </div>
      </div>

      <div>
        <img src={randomBeer} alt="randombeer" />
        <div className="p-3">
          <Link className="d-flex text-decoration-none link-dark" to={`/random-beer`} >
            <h1>Random Beer</h1>
          </Link>
          <p>Pick a random beer</p>
        </div>
      </div>

      <div>
        <img src={newBeer} alt="newbeer" />
        <div className="p-3">
          <Link className="d-flex text-decoration-none link-dark" to={`/new-beer`}>
            <h1>New Beer</h1>
          </Link>
          <p>Add a new beer in our catalog</p>
        </div>
      </div>

    </div >
  )
}

export default HomePage;