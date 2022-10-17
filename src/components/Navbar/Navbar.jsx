import React from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';

const compStyle = {
    width: '100vw',
    height: '10vh',
    backgroundColor: 'cyan',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    
}

const Navbar = () => {
  return (
    <div style={compStyle}>
        
        <Link to='/'>
          <HomeIcon fontSize='large'/>
        </Link>
    </div>
  )
}

export default Navbar