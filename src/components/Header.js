import React from 'react'
import {Link} from 'react-router-dom'

function Header(props) {

    let header={
        display:'flex',
        width:'100vw',
        height:'50px',
        backgroundColor:'#00E0FF',
        color:'white',
        justifyContent:'center',
        alignItems:'center',
        fontWeight:'600'
    }
    let styleAnchor={
        color:'white',
        textDecoration:'none',  
    }

    return (
        <div style={header}>
           <Link to={'/'} style={styleAnchor}>HOME</Link>
        </div>
    )
}
export default Header