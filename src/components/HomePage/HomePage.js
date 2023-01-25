import { Link } from "react-router-dom";
import BeerImg from '../../assets/beers.png'
import RandomBeerImg from '../../assets/random-beer.png'
import NewBeerImg from '../../assets/new-beer.png'
import './HomePage.css'

function HomePage () {
    return (
      <div className="HomePage">
       <div className="homePageCard">
        <img className="homePageImg" src={BeerImg} alt="Bar"/>
        <Link to="/beers" className="homePageLink">All Beers</Link>
        <p>Pellentesque tincidunt, diam a interdum consectetur, mauris leo egestas augue, non commodo purus mi id sem. Nam tincidunt pretium condimentum. Suspendisse vel turpis quis dui porta varius. Sed dictum varius purus sit amet vulputate. Aliquam ut rhoncus velit. Nam mattis vitae ligula in posuere. Etiam maximus malesuada metus, vel dictum magna sollicitudin et. Etiam sollicitudin hendrerit ex, a porttitor libero vestibulum id.</p>
       </div>
       <div className="homePageCard">
       <img className="homePageImg" src={RandomBeerImg} alt="Beer tap"/>
       <Link to="/random" className="homePageLink">Random Beer</Link>
        <p>Pellentesque tincidunt, diam a interdum consectetur, mauris leo egestas augue, non commodo purus mi id sem. Nam tincidunt pretium condimentum. Suspendisse vel turpis quis dui porta varius. Sed dictum varius purus sit amet vulputate. Aliquam ut rhoncus velit. Nam mattis vitae ligula in posuere. Etiam maximus malesuada metus, vel dictum magna sollicitudin et. Etiam sollicitudin hendrerit ex, a porttitor libero vestibulum id.</p>
       </div>
       <div className="homePageCard">
       <img className="homePageImg" src={NewBeerImg} alt="Beer"/>
       <Link to="/new" className="homePageLink">New Beer</Link>
        <p>Pellentesque tincidunt, diam a interdum consectetur, mauris leo egestas augue, non commodo purus mi id sem. Nam tincidunt pretium condimentum. Suspendisse vel turpis quis dui porta varius. Sed dictum varius purus sit amet vulputate. Aliquam ut rhoncus velit. Nam mattis vitae ligula in posuere. Etiam maximus malesuada metus, vel dictum magna sollicitudin et. Etiam sollicitudin hendrerit ex, a porttitor libero vestibulum id.</p>
       </div>
      </div>
    );
  }
  
  export default HomePage;