import React,{ Component } from 'react'
import { Link } from 'react-router-dom'
import navbarIcon from '../images/house-309113_1280.webp'

class Navbar extends Component {
    constructor() {
        super()
        this.state = { }
    }
 
    render() {
 
        return (
            <>
                <nav>
                    <Link to="/"> <img src={navbarIcon} alt="house" /> </Link>
                </nav>
            </>
        )
    }
}

export default Navbar