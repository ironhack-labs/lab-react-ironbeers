import allBeers from "./../assets/beers.png"
import randomBeer from "./../assets/random-beer.png"
import newBeer from "./../assets/new-beer.png"
import { Link } from "react-router-dom"
const HomePage = () => {
    return (
        <>
            <Link to={"/beers"}>
                <img src={allBeers} alt="allBeers" />
                <h2>All Beers</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam turpis tortor, blandit eget auctor non, maximus non neque. Nam et iaculis neque. Cras et lobortis magna.</p>
            </Link >
            <Link to={"/random-beer"}>
                <img src={randomBeer} alt="randomBeer" />
                <h2>Random Beer</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam turpis tortor, blandit eget auctor non, maximus non neque. Nam et iaculis neque. Cras et lobortis magna.</p>
            </Link>
            <Link to={"/new-beer"}>
                <img src={newBeer} alt="newBeer" />
                <h2>New Beer</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam turpis tortor, blandit eget auctor non, maximus non neque. Nam et iaculis neque. Cras et lobortis magna.</p>
            </Link>
        </>
    )
}

export default HomePage;
