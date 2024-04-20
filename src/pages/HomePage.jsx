import { Link } from "react-router-dom";
import beers from "../assets/beers.png";
import newBeer from "../assets/new-beer.png";
import randomBeer from "../assets/random-beer.png";

function HomePage() {
  return (
    <>
      <div className="HomePage">
        <div className="info-container">
          <img src={beers} />
          <Link to={"/beers"}>
            <h2>All Beers</h2>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sed
            nesciunt praesentium perspiciatis fugiat assumenda? Ipsam
            consequuntur modi delectus necessitatibus, blanditiis non beatae,
            architecto perferendis odit rerum voluptas nihil dolorum?
          </p>
        </div>

        <div className="info-container">
          <img src={randomBeer} />
          <Link to={"/random-beer"}>
            <h2>Random Beer</h2>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sed
            nesciunt praesentium perspiciatis fugiat assumenda? Ipsam
            consequuntur modi delectus necessitatibus, blanditiis non beatae,
            architecto perferendis odit rerum voluptas nihil dolorum?
          </p>
        </div>

        <div className="info-container">
          <img src={newBeer} />
          <Link to={"/new-beer"}>
            <h2>New Beer</h2>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sed
            nesciunt praesentium perspiciatis fugiat assumenda? Ipsam
            consequuntur modi delectus necessitatibus, blanditiis non beatae,
            architecto perferendis odit rerum voluptas nihil dolorum?
          </p>
        </div>
      </div>
    </>
  );
}

export default HomePage;
