import React from 'react';
import './Header.css'

import { NavLink } from 'react-router-dom';

const header = () => {

    return (
        <>
            <article className="NavlinkStyle">
                <NavLink to="/">
                    <h1>
                        Home
                    </h1>
                </NavLink>
            </article>
        </>
    )

}

export default header
