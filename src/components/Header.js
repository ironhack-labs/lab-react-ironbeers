import React from 'react';
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      
      <Link to='/' >
      <img
        src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png"
        height="100px"
        alt="Back to homepage"
      />
      </Link>
    </div>
  );
}