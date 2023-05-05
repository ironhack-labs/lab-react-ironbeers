import { Link } from "react-router-dom"
import Beers from "../assets/beers.png"
import RandomBeer from "../assets/random-beer.png"
import NewBeer from "../assets/new-beer.png"

function HomePage() {
    return (
        <div>
            <Link to="/beers" style={{textDecoration: 'none', color: 'black'}}>
                <div className="link-frame">
                    <img src={Beers} alt="Beers" width={500} />
                    <h2>All Beers</h2>
                    <p className="link-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ante velit, suscipit ut rhoncus eget, sagittis hendrerit ante. Sed suscipit ipsum nisi. Suspendisse potenti.</p>
                </div>
            </Link>
            <Link to="/random-beer" style={{textDecoration: 'none', color: 'black'}}>
                <div className="link-frame">
                    <img src={RandomBeer} alt="Random Beer" width={500} />
                    <h2>Random Beer</h2>
                    <p className="link-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ante velit, suscipit ut rhoncus eget, sagittis hendrerit ante. Sed suscipit ipsum nisi. Suspendisse potenti.</p>
                </div>
            </Link>
            <Link to="/new-beer" style={{textDecoration: 'none', color: 'black'}}>
                <div className="link-frame">
                    <img src={NewBeer} alt="New Beer" width={500} />
                    <h2>New Beer</h2>
                    <p className="link-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ante velit, suscipit ut rhoncus eget, sagittis hendrerit ante. Sed suscipit ipsum nisi. Suspendisse potenti.</p>
                </div>
            </Link>
        </div>
    )
}

export default HomePage