import { Link } from 'react-router-dom'

function HomePage(props) {
    return (
        <div className='container'>
            <h2>HomePage</h2>
            <div>
                <div><a href="/beers">
                    <img src="src/assets/beers.png" alt="All beers picture" />
                    All Beers
                </a></div>
                <div><a href="/random-beer">
                    <img src="src/assets/random-beer.png" alt="Random beer picture" />
                    Random Beer
                </a></div>
                <div><a href="/new-beer">
                    <img src="src/assets/new-beer.png" alt="New beer picture" />
                    New Beer
                </a></div>
            </div>
        </div>
    )
}

export default HomePage;
