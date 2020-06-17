import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, NavItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default function NavBar() {
    return(
        <Navbar color="dark" fixed='top'>
            <ul class="nav justify-content-center">
                <NavItem className  ="nav-item a-link" style={{color:'#ffffff'}}>
                    <NavLink exact to="/">Home</NavLink>
                </NavItem>
                <NavItem class="nav-item">
                    <NavLink to="/beers">Beers List</NavLink>
                </NavItem>
                <NavItem class="nav-item">
                    <NavLink to="/random-beer">Random Beer</NavLink>
                </NavItem>
                <NavItem class="nav-item">
                    <NavLink to="/new-beer">New Beer</NavLink>
                </NavItem>
            </ul>
        </Navbar>
    )
}