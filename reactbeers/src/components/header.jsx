import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './header.css'


export default class Header extends Component {
    render() {
        return (
            <div>
                <Link to='/'><img className="headerlogohome"src="../img/homebeer.png" alt="" /></Link>

            </div>
        )
    }
}
