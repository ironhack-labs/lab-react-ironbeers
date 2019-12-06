import React from 'react';
import { Link } from "react-router-dom";
import { StyledNavbar } from "../styles/components";

const Navbar = () => (
    <StyledNavbar>
        <h1>
            <Link to="/">Home</Link>
        </h1>
    </StyledNavbar>
);

export default Navbar;