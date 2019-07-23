import React from 'react'
import { Link } from 'react-router-dom'
function Header () {
    return(
        <Link to={'/'}>
            <button className="App-link">
                <img className="imgNav" src="/img/Home.png" alt="home icon" width="10%"/>
            </button>
        </Link>
    )
}
export default Header
