import { Link } from "react-router-dom"
import "./HomePage.css"
import img1 from "../assets/beers.png"
import img2 from "../assets/new-beer.png"
import img3 from "../assets/random-beer.png"


export default function HomePage(){

    
    return (
      <div className="homepage-container">
        <Link to="/beers">
          <div className="homepage-group">
            <div className="homepage-img-container">
              <img src={img1} alt="beers" />
            </div>
            <h3>All Beers</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
              risus ex. Curabitur lacinia feugiat nulla ut mollis. Donec at
              cursus mauris. 
            </p>
          </div>
        </Link>
        <Link to="/random-beer">
          <div className="homepage-group">
            <div className="homepage-img-container">
              <img src={img2} alt="random-beer" />
            </div>
            <h3>Random Beer</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
              risus ex. Curabitur lacinia feugiat nulla ut mollis. Donec at
              cursus mauris. Nam id tincidunt eros. Duis eu nisi est. Nunc lacus
              orci.
            </p>
          </div>
        </Link>
        <Link to="/new-beer">
          <div className="homepage-group">
            <div className="homepage-img-container">
              <img src={img3} alt="new beer" />
            </div>
            <h3>New Beer</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
              risus ex.
            </p>
          </div>
        </Link>
      </div>
    );
}