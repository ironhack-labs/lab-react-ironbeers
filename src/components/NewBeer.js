//jshint esversion:9
import {Link} from 'react-router-dom';

export const NewBeer = () => {
  return (
      
    <div className="NewBeer"> 
        <nav>
            <Link to="/"> <h3>Home</h3> </Link>
        </nav>
        
        <h1>New Beer</h1>
    </div>
  )
}
