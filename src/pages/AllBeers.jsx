import Header from "../components/Header";
import BeerCard from "../components/BeerCard";

function AllBeers(props) {

  return (
    <>
      <Header />
      <div>
        {props.beers.map((beer) => <BeerCard key={beer._id} beer={beer} />)}
      </div>
    </>
  );
}

export default AllBeers;
