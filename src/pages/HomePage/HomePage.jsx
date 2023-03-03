import { Link } from "react-router-dom";
import beerPic from './../../assets/beers.png'
import randomBeer from './../../assets/random-beer.png'
import newBeer from './../../assets/new-beer.png'


const HomePage = () => {

    return <div className="container">
        <div className="row">
            <Link to='/beers'>
                <img src={beerPic}></img>
                <h1>All Beers</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum pariatur laboriosam quae?</p>
            </Link>
            <Link to='/random-beer'>
                <img src={randomBeer}></img>
                <h1>Random Beer</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum pariatur laboriosam quae?</p>
            </Link>
            <Link to='/new-beer'>
                <img src={newBeer}></img>
                <h1>New Beer</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum pariatur laboriosam quae?</p>
            </Link>

        </div>

    </div>

}

export default HomePage