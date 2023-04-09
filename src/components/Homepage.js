import { NavLink } from 'react-router-dom'
import './HomePage.css'

function HomePage() {
  return (
    <div>
      <h1>HomePage</h1>
        <nav>
          <NavLink className="HomeNav" to="/beers">Beers</NavLink> 
          <NavLink className="HomeNav"  to="/random-beer">Random Beer</NavLink>
          <NavLink className="HomeNav"  to="/new-beer">New Beer</NavLink> 
        </nav>
    </div>
  )
}

export default HomePage;