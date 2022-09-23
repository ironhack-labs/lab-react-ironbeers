import beersImg from "../assets/beers.png";
import newBeerImg from "../assets/new-beer.png";
import randomBeerImg from "../assets/random-beer.png";
import BeerCard from "../components/BeerCard";
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';

function Home() {
    const beerCardsContent = [
        {src: beersImg, name: "All Beers", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi", path: "/beers"},
        {src: newBeerImg, name: "New Beer", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi", path: "/beers/new"},
        {src: randomBeerImg, name: "Random Beer", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi", path: "/beers/random"}
      ]
    return(
        <div> 
            <h1>Test</h1>
            { beerCardsContent.map((card) => {
                return (
                    <Link to={card.path} key={uuidv4()}>
                        <BeerCard  src={card.src} name={card.name} description={card.description} />
                    </Link>
                    )
                })
            }
        </div>
    )
}

export default Home;
