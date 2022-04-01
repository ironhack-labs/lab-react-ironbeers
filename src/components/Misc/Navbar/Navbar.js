import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className='d-flex justify-content-center' style={{ backgroundColor: '#33D7FF' }}>
                <nav className="navbar navbar-light container-fluid me-4 ms-4" style={{ backgroundColor: '#33D7FF' }}>
                    {/* LINK A HOME */}
                    <a className="navbar-brand" href="/">
                        <span className="icon-text">
                            <span className="icon">
                                <i className="fas fa-home fa-xl mt-2" style={{ color: '#FFF' }}></i>
                            </span>
                        </span>
                    </a>
                    {/* LINK A RANDOM-BEERS */}
                    <a className="navbar-brand" href="#">
                        <span className="icon-text">
                            <span className="icon">
                                <i className="fa-solid fa-xl mt-2 fa-shuffle" style={{ color: '#FFF' }}></i>
                            </span>
                        </span>
                    </a>
                    {/* LINK A ALL-BEERS */}
                    <Link to="/beers" className="navbar-brand">
                        <span className="icon-text">
                            <span className="icon">
                                <i className="fa-solid fa-beer-mug-empty fa-xl mt-2" style={{ color: '#FFF' }}></i>
                            </span>
                        </span>
                    </Link>
                    {/* LINK A NEW-BEERS */}
                    <a className="navbar-brand" href="#">
                        <span className="icon-text">
                            <span className="icon">
                                <i className="fa-solid fa-plus fa-xl mt-2" style={{ color: '#FFF' }}></i>
                            </span>
                        </span>
                    </a>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;


