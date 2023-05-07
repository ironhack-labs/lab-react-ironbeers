import beers from "../assets/beers.png"
import randomBeer from "../assets/random-beer.png"
import newBeer from "../assets/new-beer.png"
import { Link } from "react-router-dom";


function HomePage() {
  return (
    <div>
    <img src={beers} alt="beers"/>
    <Link to="/beers" style={{ textDecoration: "none" }}><h1>All Beers</h1></Link>
        <p className="paragraph">Beer is a popular alcoholic beverage that comes in a wide variety of styles and flavors. From the bold and hoppy IPA to the rich and complex stout, there is a beer to suit every taste preference. Whether you prefer a light and refreshing pilsner or a full-bodied wheat beer, the world of beer is full of options to explore and enjoy. So raise a glass and cheers to the delicious and diverse world of beer!</p>
    <img src={randomBeer} alt="random"/>
    <Link to="/random-beer" style={{ textDecoration: "none" }}><h1>Random Beer</h1></Link>
        <p className="paragraph">Beer is a popular alcoholic beverage that comes in a wide variety of styles and flavors. From the bold and hoppy IPA to the rich and complex stout, there is a beer to suit every taste preference. Whether you prefer a light and refreshing pilsner or a full-bodied wheat beer, the world of beer is full of options to explore and enjoy. So raise a glass and cheers to the delicious and diverse world of beer!</p>
    <img src={newBeer} alt="new"/>
    <Link to="/new-beer" style={{ textDecoration: "none" }}><h1>New Beer</h1></Link>
        <p className="paragraph">Beer is a popular alcoholic beverage that comes in a wide variety of styles and flavors. From the bold and hoppy IPA to the rich and complex stout, there is a beer to suit every taste preference. Whether you prefer a light and refreshing pilsner or a full-bodied wheat beer, the world of beer is full of options to explore and enjoy. So raise a glass and cheers to the delicious and diverse world of beer!</p>
    </div>
  );
}

export default HomePage;


