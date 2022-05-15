import { Link } from 'react-router-dom'

function Home () {
    return (
        <div className="home-page">
            <h1>Welcome to the home page</h1>
            <div className="links">
                <Link to='/beers'>All beers</Link>
                <Link to='/create-beers'>New beer</Link>
                <Link to='/random-beers'>Random beer</Link>
            </div>
        </div>
      );
}

export default Home; 