import { Link } from 'react-router-dom'

function HomePage() {
    return (
        <div className="home">
            <Link to={'/beers'}>
                <h2>All beers</h2>
            </Link>
            <Link to={'/random-beer'}>
                <h2>Random beer</h2>
            </Link>
            <Link to={'/new-beer'}>
                <h2>New beer</h2>
            </Link>
        </div>
    )
}

export default HomePage;
