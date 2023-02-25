import beers from "../assets/beers.png";
import randomBeer from "../assets/random-beer.png";
import newBeer from "../assets/new-beer.png";

function Home() {
  return (
    <>
      <img
        src={beers}
        alt="all beers"
      />
      <h3>All beers</h3>
      <p>Check out all beers in our collection!</p>

      <img
        src={randomBeer}
        alt="random beer"
      />
      <h3>Random beer</h3>
      <p>Check out a random beer!</p>

      <img
        src={newBeer}
        alt="new beer"
      />
      <h3>New beer</h3>
      <p>Add a new beer to our collection!</p>
    </>
  );
}

export default Home;
