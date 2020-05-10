import React from 'react';
import { NavLink, withRouter } from "react-router-dom"; // withRouter is called a higher-order component
// C'est un component that takes another component as a parameter, you'll get history, location & match
import { FaHome } from "react-icons/fa";

function NavMain(props) {

    if (props.location.pathname !== "/") {

        return (

            <div style={{ backgroundColor: "dodgerblue" }}>
                {/* <NavLink exact to="/beers">All beers</NavLink>
            <NavLink exact to="/random-beer">Random beer</NavLink>
            <NavLink exact to="/">Home</NavLink> */}

                <NavLink exact to="/">
                    <FaHome color="white" size="3rem" />
                </NavLink>

            </div>
        )
    }
    else return null
}
export default withRouter(NavMain);
