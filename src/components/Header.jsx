import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
 

function Header() {
  return (
    <div>

        <header className="header">
            <div>
                <Link to="/"><img src="https://cdn-icons-png.flaticon.com/512/2626/2626923.png" alt="" id="header-img"/></Link>
            </div>
        </header>

    </div>
  )
}

export default Header