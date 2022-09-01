import Navbar from "../components/Navbar"
import BeerCard from "../components/BeerCard"

const allBeers = ({beers}) => {
  return (

    <div>
      <Navbar />
      {beers.map((beer) => (
        <BeerCard beer={beer} key={beer._id} />
      ) )}
      </div>
  )
}

export default allBeers