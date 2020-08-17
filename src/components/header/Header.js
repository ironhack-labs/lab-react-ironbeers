import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = ({ icon }) => {

    return (
        <nav className="navbar navbar-dark bg-primary mb-3 fixed-top d-block text-center">
            <Link to='/' className={`navbar-brand ${icon}`}></Link>
        </nav >
    )
}
//esto permite que a Header se le pueda pasar el props icon con otro valor en los componentes en que se renderiza, pero se establece como default (en este caso) el icon home 

Header.defaultProps = {
    icon: 'fas fa-home'
};
Header.propTypes = {
    icon: PropTypes.string.isRequired
};
export default Header;
