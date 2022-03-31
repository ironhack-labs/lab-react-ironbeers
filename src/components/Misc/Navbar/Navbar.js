import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand align-items-center" href="#">🍺 IronBeers 🍺</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item px-3">
                            {/* LINK */}
                            All Beers
                        </li>
                        <li className="nav-item px-3">
                            {/* LINK */}
                            Random Beer
                        </li>
                        <li className="nav-item px-3">
                            {/* LINK */}
                            New Beer
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;


