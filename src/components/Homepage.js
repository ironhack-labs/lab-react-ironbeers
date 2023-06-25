import beers from "../assets/beers.png";
import randomBeer from "../assets/randomBeer.png";
import newBeer from "../assets/newBeer.png";

function Homepage() {
  return (
    <>
      <h1>Welcome</h1>
      <h2>All Beers</h2>
      <img src={beers} alt="beers" />
      <p>This is our selection of beer.</p>
      <hr />
      <h2>Random Beer</h2>
      <img src={randomBeer} alt="randomBeer" />
      <p>Try a random beer today.</p>
      <hr />
      <h2>Add a new Beer</h2>
      <img src={newBeer} alt="newBeer" />
      <p>Share a new beer by adding it to our collection.</p>
    </>
  );
}

export default Homepage;
