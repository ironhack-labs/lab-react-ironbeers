
import { Link } from 'react-router-dom';


function RandomBeers() {

    return (
        <div>
            <header>
                <Link to='/'>Home</Link>
            </header>
            <div className="random-beers">
                <h1>Random beers page</h1>
            </div>
        </div>
    )
}

export default RandomBeers;