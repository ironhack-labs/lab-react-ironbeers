import { Link } from "react-router-dom";
import beersImg from "../assets/beers.png";
import newBeerImg from "../assets/new-beer.png";
import randomBeerImg from "../assets/random-beer.png";

function HomePage() {
  return (
    <div className='home'>
      <div className='home-link'>
        <Link to='/beers'>
          <img src={beersImg} className='home-img' alt='Beer labels' />
          <h1>All Beers</h1>
          <p>
            Lorem ipsum dolor sit amet, conjesectetur adipiscing elit. Vivamus
            pharetra lectus, sit amet eleifend ex tincidunt in. Nam distum arcu
            ut dignissim varius.
          </p>
        </Link>
      </div>
      <div className='home-link'>
        <Link to='/random-beer' className='home-link'>
          <img
            src={randomBeerImg}
            className='home-img'
            alt='Beer taps bottle'
          />
          <h1>Random Beer</h1>
          <p>
            Lorem ipsum dolor sit amet, conjesectetur adipiscing elit. Vivamus
            pharetra lectus, sit amet eleifend ex tincidunt in. Nam distum arcu
            ut dignissim varius.
          </p>
        </Link>
      </div>
      <div className='home-link'>
        <Link to='/new-beer'>
          <img src={newBeerImg} className='home-img' alt='Beer taps' />
          <h1>New Beer</h1>
          <p>
            Lorem ipsum dolor sit amet, conjesectetur adipiscing elit. Vivamus
            pharetra lectus, sit amet eleifend ex tincidunt in. Nam distum arcu
            ut dignissim varius.
          </p>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
