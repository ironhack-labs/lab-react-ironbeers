import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to={"/"}><img
                style={{ height: "80px", width: "650px"}}
                src="../home.PNG"
                alt=""
            /> </Link>
        </div>
    )
}

export default Header