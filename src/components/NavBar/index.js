import { Link } from "react-router-dom";
import image from '../../assets/navbar.png'


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