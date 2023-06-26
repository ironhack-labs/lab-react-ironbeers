import { Link } from 'react-router-dom';
import beersImage from '../assets/beers.png';
import randomBeerImage from '../assets/random-beer.png';
import newBeerImage from '../assets/new-beer.png';
import "./HomePage.css"

function HomePage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src={beersImage} className="card-img-top" alt="All Beers" />
            <div className="card-body" style={{ padding: "40px" }}>
              <Link to="/beers" className="card-title" style={{fontSize: "24px", textDecoration: "none"}}><b>All Beers</b></Link>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet, massa id malesuada <br /> dignissim, ligula dolor commodo nisl, eu malesuada mi elit vel quam. Ut sit amet elit a enim <br /> lobortis mattis.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src={randomBeerImage} className="card-img-top" alt="Random Beer" />
            <div className="card-body" style={{ padding: "40px" }}>
              <Link to="/random-beer" className="card-title" style={{fontSize: "24px", textDecoration: "none"}}><b>Random Beer</b></Link>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet, massa id malesuada <br /> dignissim, ligula dolor commodo nisl, eu malesuada mi elit vel quam. Ut sit amet elit a enim <br /> lobortis mattis.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src={newBeerImage} className="card-img-top" alt="New Beer" />
            <div className="card-body" style={{ padding: "40px" }}>
              <Link to="/new-beer" className="card-title" style={{fontSize: "24px", textDecoration: "none"}}><b>New Beer</b></Link>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet, massa id malesuada <br /> dignissim, ligula dolor commodo nisl, eu malesuada mi elit vel quam. Ut sit amet elit a enim <br /> lobortis mattis.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;