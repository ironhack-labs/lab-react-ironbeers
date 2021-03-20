import React from 'react'
import { withRouter, Switch, Link } from "react-router-dom";

const Header = (props) => {

    return (
        <div style={{ height: 70, backgroundColor:"lightblue" ,borderBottom:"1px solid darkgrey",   boxShadow: "2px 2px 10px 0 #EEE"
    }}>
            {props.location.pathname !== "/" && <Link  to="/"><img style={{width: 60, padding:5}} src='https://image.flaticon.com/icons/png/512/69/69524.png' alt=""/></Link>}
        </div>  
    )

    
}

export default withRouter(Header)
