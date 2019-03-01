import React from 'react';
import {Link} from 'react-router-dom'

class Header extends React.Component {
    render(){
        return(
            <div>
        <header>
            <Link to = {'/'} > Home </Link>
        </header>
        </div>
        )
    }
}

export default Header;
