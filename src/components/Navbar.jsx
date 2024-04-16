import { Link } from "react-router-dom";

function Navbar() {
  return (
      <nav className="navbar navbar-expand-xl" style={{ backgroundColor: 'rgb(61, 196, 252)' }}>
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse md:visible" id="navbarNav">
            <div className="mx-auto">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to='/' className="nav-link text-white"><span className="material-symbols-outlined text-white">sports_bar</span></Link>
                </li>
                <li className="nav-item">
                  <Link to='/beers' className="nav-link text-white">All Beers</Link>
                </li>
                <li className="nav-item">
                  <Link to='/random-beer' className="nav-link text-white">Random Beer</Link>
                </li>
                <li className="nav-item">
                  <Link to='/new-beer' className="nav-link text-white">Add Beer</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Navbar;
