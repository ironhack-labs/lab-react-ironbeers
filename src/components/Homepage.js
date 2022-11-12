import HomepageBlock from "./HomepageBlock";
import beersImg from "../assets/beers.png";
import newBeersImg from "../assets/new-beer.png";
import randomBeerImg from "../assets/random-beer.png";

function Homepage() {
  return (
    <div>
      <HomepageBlock img={beersImg} headline={"All Beers"} link={"/beers"} />
      <HomepageBlock
        img={newBeersImg}
        headline={"Random Beer"}
        link={"/random-beer"}
      />
      <HomepageBlock img={randomBeerImg} headline={"New Beer"} link={"/new-beer"} />
    </div>
  );
}

export default Homepage;
