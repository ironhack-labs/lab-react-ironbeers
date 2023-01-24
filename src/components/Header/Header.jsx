import { Link } from "react-router-dom"
import './Header.css'

function Header(){
    return(
        <div className="header">
        <Link to='/'>
    <img className="small" src="https://cdn.pixabay.com/photo/2015/12/28/02/58/home-1110868_960_720.png"/>
    </Link>
        </div>
    )
}

export default Header