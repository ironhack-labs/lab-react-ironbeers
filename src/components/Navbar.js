import React from 'react'
import HomeLogo from '../assets/homeLogo.png'
import {Link} from "react-router-dom"

class Navbar extends React.Component {
    render(){
        return (
            <div className="Navbar">
                <Link to="/"><img src={HomeLogo} alt="Home" className="Home-Logo"/></Link>
            </div>
        )
    }
}

export default Navbar