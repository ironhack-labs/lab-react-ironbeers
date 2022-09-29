import { Link } from 'react-router-dom'
import house from '../../../assets/house.png'

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
                <img src={house} alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
          </Link>
        </div>
    </nav>
  )
}
