import { Link } from "react-router-dom"
import home from '../assets/home.png'
export default function NavBar(){
    return(

        <nav style={{backgroundColor:'#00C3FF', display: 'flex', justifyContent: 'center',marginBottom: '10px'}}>


        <Link to="/">
            <img src={home} alt="Home" />
        </Link>
        
      
        </nav>
    )
}