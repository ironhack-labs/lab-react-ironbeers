import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark" >
            <div className='container'>
                <NavLink to='/' exact><span className="navbar-brand mb-0 h1">_IronBeers_</span></NavLink>
            </div>
        </nav>
    )
}

export default Navbar