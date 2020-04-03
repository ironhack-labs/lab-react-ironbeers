import React from 'react'
import {Link} from 'react-router-dom'

export default function Nav() {
    return (
        <div className='navbar'>
            <Link className='link-nav' to='/'>HOME</Link>
        </div>
    )
}
