import Header from "./Header";
import ListItem from "./ListItem";

function BeersList({ beers }) {
  return (
    <div>
      <Header />
      <ListItem beers={beers} />
    </div>
  );
}

export default BeersList;
