import { Link } from "react-router-dom"
import beers from "../../assets/beers.png"
import newbeer from "../../assets/new-beer.png"
import randombeer from "../../assets/random-beer.png"



function Homepage() {
  return (
    <div>
      <Link to={`/beers`}>
        <img src={beers} alt="all beers" />
        <h1>All Beers</h1>
      </Link>
      <p>Lorem ipsum dolor ISTO NÃO SE FAZ A UMA PESSOA</p>

      <Link to={`/random`}>
        <img src={randombeer} alt="Random beer" />
        <h1>Random beer</h1>
      </Link>
      <p>
        Lorem, ipsum dolor sit ISTO DO LOREM TAMBÉM É RANDOM
      </p>


      <Link to={`/new`}>
        <img src={newbeer} alt="New beer" />
        <h1>New beer</h1>
      </Link>
      <p>
        Lorem, ipsum dolor sit É 1 DA MANHÃ POR AMOR DA SANTA
      </p>
    </div>
  )
}

export default Homepage