import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { FaHome } from 'react-icons/fa';

class Header extends Component {


    render() {
        return (
            <div>
                <Link to="/"className="w-100 d-block text-center text-white" style={{background: "#3dc4fc"}}>
                <FaHome style={{fontSize: "120px", padding: "20px"}}/>
                </Link>
                
            </div>
        )
    }
}

export default Header