
import { Link } from 'react-router-dom';
import beersImage from '../assets/beers.png';
import randomBeerImage from '../assets/random-beer.png';
import newBeerImage from '../assets/new-beer.png';


function Home() {
  return (
    <div>
      
      <div className='linksAddMargin' >
      <h2>Home Page</h2>    
        <ul>
          <Link to="/beers"><br></br>
            <img src={beersImage} alt="Beers" />
             <h2>  All Beers </h2>
             <h8>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Morbi nec sapien sodales, tincidunt sapien <br></br>vel, porttitor leo. 
            Integer vel efficitur massa, non cursus velit. </h8>
          </Link>
        </ul>
        <ul>
          <Link to="/random-beer"><br></br>
            <img src={randomBeerImage} alt="Random Beer" />
             <div>
             <h2> Random Beer </h2>
             <h8>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Morbi nec sapien sodales, tincidunt sapien <br></br>vel, porttitor leo. 
            Integer vel efficitur massa, non cursus velit. </h8>
            </div>
          </Link>
        </ul>
        <ul>
          <Link to="/new-beer"> <br></br>
            <img src={newBeerImage} alt="New Beer" />
              <h2> New Beer </h2> 
              <h8>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Morbi nec sapien sodales, tincidunt sapien <br></br>vel, porttitor leo. 
            Integer vel efficitur massa, non cursus velit. </h8>
          </Link>
        </ul>
      </div>

    </div>
  );
}

export default Home;