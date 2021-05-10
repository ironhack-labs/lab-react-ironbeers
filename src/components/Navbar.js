import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <Link to={'/'}><img src="/images/home.png" alt="" /></Link>
        </nav>
    )
}
