import React from 'react';
import { Link } from 'react-router-dom';
import imageHome from '../assets/home.png'
export const Header = () => {
  return (
    <div style={{background:'#3DC4FC',width:'100%',height:'70px',display:'flex',justifyContent:'center',alignItems:'center' }} >
      <Link to='/' >
      <img style={{width: 60,height:60,marginLeft:25}} src={imageHome} alt='imageHome'/>
      </Link>
    </div>
  )
}

