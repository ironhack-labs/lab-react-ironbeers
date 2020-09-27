import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div style={{backgroundColor: "#03b6fc", }}>
            <Link to='/' style={{color:"white", fontSize:50, textDecoration:"none"}}>Home</Link>
        </div>
    )
}
