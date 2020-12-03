import React from 'react'
import {Link} from 'react-router-dom'

function Header(props) {
    return (
        <div>
            <div>
                <Link to="/" >
                    <img src={props.image} alt="image of the header" />
                </Link>
            </div>

        </div>
    )
}

export default Header 