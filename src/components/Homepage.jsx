import { Link } from 'react-router-dom';
import beers from '../assets/beers.png';
import newBeer from '../assets/new-beer.png';
import randomBeer from '../assets/random-beer.png';
import '../components/Homepage.css';

function Homepage() {
  return (
    <div className="homepage-container">
      <div className="beers-info-container">
        <div className="homepage-img-container">
          <img className="homepage-img" src={beers} alt="beers" />
        </div>
        <div className="padding-25 beer-description">
          <Link className="homepage-link" to="/beers">
            All Beers
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem amet libero nam? Praesentium laboriosam adipisci nemo, debitis veniam, quis quam suscipit quasi minima
            asperiores eos.
          </p>
        </div>
      </div>
      <div className="beers-info-container">
        <div className="homepage-img-container">
          <img className="homepage-img" src={randomBeer} alt="random beer" />
        </div>
        <div className="padding-25 beer-description">
          <Link className="homepage-link" to="/random-beer">
            Random Beer
          </Link>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse quos iure voluptate pariatur. Aliquid, autem error. Eaque animi, iure vitae cupiditate hic delectus
            quisquam veniam.
          </p>
        </div>
      </div>
      <div className="beers-info-container">
        <div className="homepage-img-container">
          <img className="homepage-img" src={newBeer} alt="new beer" />
        </div>
        <div className="padding-25 beer-description">
          <Link className="homepage-link" to="/new-beer">
            New Beer
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est praesentium excepturi natus harum vitae, eum assumenda cumque repudiandae odio, amet repellat? Alias eum
            nihil animi.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
