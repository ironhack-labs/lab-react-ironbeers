import { Link } from "react-router-dom";
import allBeers from "../assets/beers.png"
import newBeer from "../assets/new-beer.png"
import randomBeer from "../assets/random-beer.png"

function HomePage() {
  return (
    <div className="homePage">
      <div className="beerDiv">
      <Link to="/beers"><div className="wrapper">
          <img src={allBeers} alt="" />
          <div className="beerTextHome">
            <h1>All Beers</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi aliquid vitae quam voluptate. Quam id aliquam recusandae illo nulla laborum sit eos numquam in.</p>
          </div>
        </div></Link>
      </div>
      <div className="beerDiv">
      <Link to="/random-beer"><div className="wrapper">
          <img src={randomBeer} alt="" />
          <div className="beerTextHome">
            <h1>Random Beer</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur qui nam impedit unde fuga suscipit quidem debitis, odio fugiat dolor deserunt? Mollitia expedita et assumenda aspernatur! Officiis mollitia dolorum ea.</p>
          </div>
        </div></Link>
      </div>
      <div className="beerDiv">
      <Link to="/new-beer"><div className="wrapper">
          <img src={newBeer} alt="" />
          <div className="beerTextHome">
            <h1>New Beer</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam consequuntur aspernatur officia quod iste natus ex corrupti. Eos, maiores ut labore deleniti cum explicabo, velit nemo expedita nulla consequatur laboriosam?</p>
          </div>
        </div></Link>
      </div>
    </div>
  )
}

export default HomePage;

