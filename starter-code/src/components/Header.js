import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { FaHome } from 'react-icons/fa';

class Header extends Component {


    render() {
        return (
            <div>
                <Link className="w-100 d-block text-center text-white" style={{background: "blue"}}>
                <FaHome />
                </Link>
                
            </div>
        )
    }
}

export default Header