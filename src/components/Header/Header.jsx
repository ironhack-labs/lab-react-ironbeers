import { Link } from "react-router-dom"
import imgHome from "../../assets/home.png"

const Header = () => {


    return (

        <div className="Home">
            <Link className="imgHome" to='/'> <img src={imgHome} alt="home" /></Link>
        </div>
    )
}


export default Header