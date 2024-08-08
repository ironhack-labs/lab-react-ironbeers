
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>

        <Link to='/'>
        <h1 style={{color: 'white', marginTop: '50px'}}>LAB | React IronBeers</h1>
        </Link>

    </div>
  )
}

export default Navbar
