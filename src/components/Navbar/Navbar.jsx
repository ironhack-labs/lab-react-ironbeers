import './Navbar.scss'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <div className="Navbar">
            <Link to="/"><i class="fa-solid fa-house"></i></Link>
        </div>
    )
}

export default Navbar