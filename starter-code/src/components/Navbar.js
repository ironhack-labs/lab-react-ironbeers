import React from "react";
import { Link } from "react-router-dom";
import { StyledNavbar } from "../styles/components";

const Navbar = () => (
    <StyledNavbar>
        <Link to="/">Home</Link>
    </StyledNavbar>
)
export default Navbar;