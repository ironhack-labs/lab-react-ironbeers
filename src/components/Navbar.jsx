import React from 'react';
import '../assets/css/Navbar.css'
import viking from '../assets/viking.png';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <div className='Navbar'>
      <Link to="/">
        <img src={viking} className='__w-2 __mt-1 __mb-1'/>
      </Link>
    </div>
  );
}
