import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <Link to='/'><span style={{fontSize: '40px'}}>🏠</span></Link>
        </header>    
    )
}
