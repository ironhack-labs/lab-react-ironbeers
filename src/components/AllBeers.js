//jshint esversion:9
import {Link} from 'react-router-dom';

export const AllBeers = () => {
  return (
    <div className="AllBeers"> 
        <nav>
            <Link to="/"> <h3>Home</h3> </Link>
        </nav>
        
        <h1>All Beers</h1>
    </div>
  )
}
