import beersImg from '../assets/beers.png';
import newImg from '../assets/new-beer.png';
import ranImg from '../assets/random-beer.png';
import { Link } from 'react-router-dom';




function HomePage() {
    return (
        <div className="wrap">
            <div className="item">
                <img src={beersImg} alt="page-img" className="page-img" />
                <h1> <Link to='/allbeers'>All Beers</Link></h1>
                <span className="home-page-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </span>
            </div>

            <div className="item" >
                <img src={ranImg} alt="page-img" className="page-img" />
                <h1> <Link to={'/random'}>Random Beer</Link></h1>
                <span >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempore magna aliqua. Ut enim ad minr in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </span>
            </div>

            <div className="item">
                <img src={newImg} alt="page-img" className="page-img" />
                <h1> <Link to={'/addnewbeer'}>New Beer</Link></h1>
                <span className="home-page-text">Lorem ipsum dolor sit amet, consectetur a do eiusmod tempor incididunt ut labore et dolore ma ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officiunt mollit anim id est laborum.
                </span>
            </div>

        </div>
    );
}

export default HomePage;

