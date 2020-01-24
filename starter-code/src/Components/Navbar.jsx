import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const style = {
    backgroundColor: 'lightblue',
    width: '100vw',
    display: 'block',
    textAlign: 'center',
    textDecoration: 'none',
  };
  return (
    <Link style={style} to="/">
      Casinha
    </Link>
  );
}
