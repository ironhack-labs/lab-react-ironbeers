import React from 'react'


function NavBar() {
    return (
        <div className="NavBar">
            <div>
                <a href='/'>
                    Home
                </a>
            </div>
            <ul>
                <li>
                    <a href='/beers'>Beers</a>
                </li>
                <li>
                    <a href='/random-beer'>Random Beer</a>
                </li>
                <li>
                    <a href='/new-beer'>New Beer</a>
                </li>
            </ul>
        </div>
    )
}

export default NavBar
