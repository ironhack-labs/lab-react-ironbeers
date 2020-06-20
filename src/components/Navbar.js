import React from 'react'
import { Link } from 'react-router-dom'
// Font Awesome Icons:
import FontAwesome from 'react-fontawesome'
import './Navbar.css'

export default class Navbar extends React.Component {

    render() {
        return (
            <>
                <nav class="navbar navbar-expand-lg bg-primary my-nav">
                    <ul class="navbar-nav">
                        <li class="nav-item my-home">
                            <i>
                                <Link class='nav-item' to='/'>
                                    <FontAwesome
                                        class="fa fa-home"
                                        name="home"
                                        size='3x'
                                        style={{ color: 'white' }}
                                    />
                                </Link>
                            </i>
                        </li>
                    </ul>
                </nav>
            </>)
    }
}