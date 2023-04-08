import Navbar from "../Navbar/Navbar"
import Beer from "./Beer"

function BeersList({ beers }) {


  return (
    <>
      <Navbar />
      <h1>Beers List</h1>
      <div>
        {beers.map((beer) => <Beer key={beer._id} beer={beer} />)}
      </div>
    </>
  )
}

export default BeersList