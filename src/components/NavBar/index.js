import { Link } from "react-router-dom";
import image from '../NavBar'


function NavBar(){

    return(
            <>
       <Link to='/'>
          <img src={image} alt="..."/>
          </Link>
          </>
        
        
    )
}


export default NavBar;