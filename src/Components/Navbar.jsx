import React from 'react';
import { Link, NavLink } from "react-router-dom";

function Navbar () {
    return (
    <div style={{paddingTop:"50px"}}>
    <NavLink style={{ textDecoration: 'none'}} to={`/`}><div style={{ position: 'fixed', top:"0", height:'30px', backgroundColor: "black", width:"100vw", height:"50px" }}>
    <p style={{color:"white", fontWeight:"bold"}}>HOME</p>
    </div></NavLink>
    </div>
    )
}

export default Navbar;
