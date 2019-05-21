import React from 'react';
import {Link} from 'react-router-dom';

const HomeComponent = ()=>(

<nav className="uk-navbar-container" uk-navbar>
    <div className="uk-navbar-left">

        <ul className="uk-navbar-nav">
            <li>
                <Link to="/">Home</Link>
            </li>
        </ul>

    </div>
</nav>
)

export default HomeComponent;
