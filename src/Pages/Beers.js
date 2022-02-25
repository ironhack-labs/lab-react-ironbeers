import Navbar from "../components/Navbar";

import BeerCardDetails from "../components/BeerCardDetails";

function Beers(props) {
  return (
    <div>
      <Navbar />
      {props.beers.length === 0 && <h2>Loading ...</h2>}
      {props.beers.length !== 0 &&
        props.beers.map((eachBeer) => {
          return <BeerCardDetails beer={eachBeer} key={eachBeer._id} />;
        })}
    </div>
  );
}

export default Beers;
