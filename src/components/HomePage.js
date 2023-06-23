
import {Link} from 'react-router-dom';
import beers from "../assets/beers.png";
import newbeer from '../assets/new-beer.png';
import randombeer from "../assets/random-beer.png";

function HomePage() {
  return (

    
    <div>

        
        <h1 >Home</h1>
      <Link to="/beers">List of Beers</Link>
      <Link to="/random-beer">Random Beer</Link>
      <Link to="/new-beer">New Beer</Link>
    </div>
  );
}
export default HomePage