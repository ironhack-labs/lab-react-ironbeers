import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return this.props.location.pathname==='/' ? null :
          (
            <div className='p-3 bg-primary text-white'>
               <Link to='/' style={{color:'white'}}> Home </Link> 
            </div>
        ) ;
    }
}

export default Header;