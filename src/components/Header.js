import React from 'react';
import {Link} from 'react-router-dom'

class Header extends React.Component {
    render(){
        return (
            <nav>
            <div>
                <Link to='/'>Home</Link>
            </div>
        </nav>
        )
       
    }
}

export default Header;