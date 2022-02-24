import { Link } from "react-router-dom"
import './header.css'
const Header = () =>{

    return (
        <Link to="/"><img className="headImg" src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png"></img></Link> 
    )
}

export default Header