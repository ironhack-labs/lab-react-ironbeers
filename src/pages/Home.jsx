import beers from './../assets/beers.png'
import newbeer from './../assets/new-beer.png'
import randombeer from './../assets/random-beer.png'
import { Link, NavLink } from 'react-router-dom';

function Home() {
  return (
    <div className="homePage">
        <Link to={`/beers`} className="links">
            <div className="all-beers">
                <img src={beers} alt="beers" className="beers-image"/>
                <span className="beers-info">
                    <h2 className='beers-title'>All Beers</h2>
                    <p className='beers-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quia voluptate placeat et iure facere vel, suscipit asperiores ipsa consequatur facilis modi expedita exercitationem debitis quos maiores amet molestias repellat!</p>
                </span>
            </div>
        </Link>
        <Link to={`/random-beer`} className="links">
            <div className="all-beers">
                <img src={randombeer} alt="beers" className="beers-image"/>
                <span className="beers-info">
                    <h2 className='beers-title'>Random Beer</h2>
                    <p className='beers-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quia voluptate placeat et iure facere vel, suscipit asperiores ipsa consequatur facilis modi expedita exercitationem debitis quos maiores amet molestias repellat!</p>
                </span>
            </div>
        </Link>
        <Link to={`/new-beer`} className="links">
            <div className="all-beers">
                <img src={newbeer} alt="beers" className="beers-image"/>
                <span className="beers-info">
                    <h2 className='beers-title'>New Beer</h2>
                    <p className='beers-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quia voluptate placeat et iure facere vel, suscipit asperiores ipsa consequatur facilis modi expedita exercitationem debitis quos maiores amet molestias repellat!</p>
                </span>
            </div>
        </Link>
    </div>
  )
}

export default Home