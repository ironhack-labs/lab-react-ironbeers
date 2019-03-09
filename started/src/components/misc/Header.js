import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <section className="hero is-info">
            <div className="hero-body has-text-centered">
                <div className="container">
                <Link to='/home'> <i className="fas fa-home is-size-1 "></i></Link> 
                </div>
            </div>
        </section>

    )

}
export default Header;