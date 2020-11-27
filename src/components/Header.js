import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <div>
            <nav style={{backgroundColor: 'skyBlue', padding: '15px', display:'flex', justifyContent:'center'}}>
                <Link to='/'>
                <img src="../home.png" style={{width:'30px', height:'auto'}}/>
                </Link> 
            </nav>
        </div>
    )
}

export default Header