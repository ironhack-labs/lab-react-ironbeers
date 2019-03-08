import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <section class="hero is-info">
            <div class="hero-body has-text-centered">
                <div class="container">
                <Link to='/home'> <i className="fas fa-home is-size-1 "></i></Link> 
                </div>
            </div>
        </section>

    )

}
export default Header;