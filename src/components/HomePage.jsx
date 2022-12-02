import { Link } from "react-router-dom";
import Beers from "../assets/beers.png";
import NewBeer from "../assets/new-beer.png";
import RandomBeer from "../assets/random-beer.png";

const HomePage = () => {
  return (
    <div className="cards-container">
      <div className="card" style={{width: "18rem"}}>
        <img className="card-img-top" src={Beers} alt="Card cap"/>
        <div className="card-body">
          <Link to="/beers"><h5>All Beers</h5></Link>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div className="card" style={{width: "18rem"}}>
        <img className="card-img-top" src={NewBeer} alt="Card cap"/>
        <div className="card-body">
          <Link to="/new-beer"><h5>New Beer</h5></Link>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div className="card" style={{width: "18rem"}}>
        <img className="card-img-top" src={RandomBeer} alt="Card cap"/>
        <div className="card-body">
          <Link to="/random-beer"><h5>Random Beer</h5></Link>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
  )
}

export default HomePage
