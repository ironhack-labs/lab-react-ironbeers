import { Link } from "react-router-dom";
import img from '../assets/beers.png'
import img1 from '../assets/random-beer.png'
import img2 from '../assets/new-beer.png'


function HomePage() {
    return (
        <div>
            <nav>
                <Link to = {"/beers"} >
                    <img src = {img} />
                    <h1>All Beers</h1>
                </Link>
                <Link to = {"/random-beer"} >
                    <img src = {img1} />
                    <h1>Random beers</h1>
                </Link>
                <Link to = {"/new-beer"} >
                    <img src = {img2} />
                    <h1>New Beers</h1>
                </Link>
            </nav>
        </div>
    )
}

export default HomePage;
