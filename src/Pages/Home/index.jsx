import {Link} from 'react-router-dom';
import beers from "../../assets/beers.png"
import randomBeer from "../../assets/random-beer.png"
import newBeer from "../../assets/new-beer.png"
const imgURL = "https://media.giphy.com/media/xDHdViOEBgh9yj1PhI/giphy.gif";


function HomePage() {
  return (
    <div id="home-page-style">
        <h1>Home</h1>
        <img width="200px" src={imgURL} alt="" className="page-img"/>
        <Link to="/beers">
        All Beers
        </Link>
        <img src={beers} alt="" className="page-img"/>
        <p>Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer 
        took a galley of type and scrambled it to make a type specimen book.</p>
        <Link to="/randombeer">
        Random Beer
        </Link>
        <img src={randomBeer} alt="" className="page-img"/>
        <p>Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer 
        took a galley of type and scrambled it to make a type specimen book.</p>
        <Link to="/newbeer">
        New Beer
        </Link>
        <img src={newBeer}alt="" className="page-img"/>
        <p>Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer 
        took a galley of type and scrambled it to make a type specimen book.</p>

    </div>
  )
}

export default HomePage;