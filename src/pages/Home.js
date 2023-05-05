import { Link } from "react-router-dom"
import beersLibrary from "../assets/beers.png"
import beerImageNew from "../assets/new-beer.png"
import randomBeerImage from "../assets/random-beer.png"

function Home() {
  return (
    <div className="homepage">
      <Link className="beer-page" to="/beers">
        <img src={beersLibrary} alt="beer" /> </Link>
      <h3>Beer Library</h3>
      <Link className="new-beer" to="/newbeer">
        <img src={beerImageNew} alt="newbeer" /> </Link>
      <h3>Create a new Beer</h3>
      <Link className="random-beer" to="/randombeer">
        <img src={randomBeerImage} alt="randombeer" />
      </Link>
      <h3>Discover a random beer</h3>
    </div>
  )
}
export default Home