import { Link } from 'react-router-dom';

function Home() {
    return(
        <div>
            <Link to="/all-beers">All Beers</Link>
            <Link to="/random-beer">Random Beer</Link>
            <Link to="/beer/create">New Beer</Link>
        </div>
        
    )
}


export default Home