import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <header className='header'>
        <NavLink to= "/">
            <button> 🏠 </button>
        </NavLink>

        <NavLink to= "/beers">
            <button> Beers </button>
        </NavLink>

        <NavLink to= "/beer/new">
            <button> New Beer </button>
        </NavLink>

        <NavLink to= "/beer/random">
            <button> Random Beer </button>
        </NavLink>
      </header>
    </nav>
  );
}

export default Navbar