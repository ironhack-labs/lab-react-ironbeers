import './nav.css'
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (<div className="nav">
        <div className="nav-header">
            <div className="nav-title">
                WikiBeers
    </div>
        </div>
        

        <div className="nav-links">
            <Link to='/'>Home</Link>

        </div>
        <div className="nav-links">
            <Link to='/random' >Random Beer</Link>

        </div>
        <div className="nav-links">
            <Link to='/new'>New Beer</Link>

        </div>
    </div>)



}
export default Navbar
