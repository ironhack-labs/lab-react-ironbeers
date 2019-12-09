  
import React from 'react';

import { Link } from 'react-router-dom';

import './style.css';

export default function Navbar() {
  return (
    <nav class="nav justify-content-center m-3">
     <Link to="/">Home</Link> 
    </nav>
   
  );
}