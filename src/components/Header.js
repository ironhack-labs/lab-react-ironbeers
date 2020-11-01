import React from 'react';
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className="App">
      <Link to={`/`}><h1 style={{backgroundColor:'blue', color: 'white'}} >I am HEADER. Click me and navigate HOME</h1></Link>
      
    </div>
  );
}

export default Header