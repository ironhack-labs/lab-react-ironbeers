import React,{ Component } from 'react'
import { Link } from 'react-router-dom'


class Navbar extends Component {
    constructor() {
        super()
        this.state = { }
    }
 
    render() {
 
        return (
            <>
                <nav className="navbar ">
                    <Link to="/"> <img src="https://cdn.pixabay.com/photo/2014/04/03/00/41/house-309113_1280.png" alt="house" /> </Link>
                </nav>
            </>
        )
    }
    }
export default Navbar