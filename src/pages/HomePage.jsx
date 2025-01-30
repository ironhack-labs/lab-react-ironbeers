import image1 from "../assets/beers.png";
import image2 from "../assets/random-beer.png";
import image3 from "../assets/new-beer.png";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="p-5">

      <div className="card mb-3 ">
        <img src={image1} className="card-img-top" alt="..." />
        <div className="card-body">
         <Link to="/beers"> <h5 className="card-title">All Beers</h5></Link> 
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
        </div>
      </div>

      <div className="card mb-4 ">
        <img src={image2} className="card-img-top" alt="..." />
        <div className="card-body">
          <Link to="/random-beer"><h5 className="card-title">Random Beer</h5> </Link> 
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
        </div>
      </div>

      <div className="card mb-4 ">
        <img src={image3} className="card-img-top" alt="..." />
        <div className="card-body">
          <Link to="/new-beer"><h5 className="card-title">New Beer</h5></Link> 
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
        </div>
      </div>

    </div>
  );
}

export default HomePage;
