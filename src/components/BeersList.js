import Header from "./Header";
import ListItem from "./ListItem";
import SearchBeer from "./SearchBeer";

function BeersList({ beers, setBeers }) {
  return (
    <div>
      <Header />
      <SearchBeer setBeers={setBeers} />
      <ListItem beers={beers} />
    </div>
  );
}

export default BeersList;
