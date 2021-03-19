import React from 'react'
import './../styles/NavBar.css'
import { withRouter } from "react-router";
import { Link } from "react-router-dom"



function NavBar(props) {

    return (
        <React.Fragment>
            {
                props.location.pathname ==="/" ||
                <div className="NavBar__NavBar">
                <h1><Link to="/">Home</Link></h1>
                </div>
            }

        </React.Fragment>

    )
}

export default withRouter(NavBar)
