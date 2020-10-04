import React from 'react';
import {Link} from 'react-router-dom';

function Header(){
return (
    <div>
      <Link to='/'>
        <header><i class="fas fa-home"></i></header>
        </Link>  
    </div>
)
}

export default Header;