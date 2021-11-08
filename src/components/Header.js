import React from 'react';
import {Link} from 'react-router-dom';


class Header extends React.Component {
    render(){
        return(
            <Link exact to='/'>HOME</Link>
        );
    }
}


export default Header;