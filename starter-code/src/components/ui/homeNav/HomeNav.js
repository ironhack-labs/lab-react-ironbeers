import React, { Component } from 'react'
import homeIcon from './home.svg'
import { Link } from "react-router-dom"
import './HomeNav.css'

class Home extends Component {

    constructor() {
        super()
        this.state = {
        }
    }

    render() {
        return (
            <Link to='/'>
                <header className="home-header">
                    <figure>
                        <img src={homeIcon} alt='icon' />
                    </figure>

                </header>
            </Link >
        )
    }

}

export default Home