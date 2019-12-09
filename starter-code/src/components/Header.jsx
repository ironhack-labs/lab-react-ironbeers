import React from 'react'
import { BrowserRouter, Switch, Route, withRouter, Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav>
    <Link to="/" style={{padding:'30px', background: 'lightblue', display:'flex', justifyContent:'center'}}> <img style={{width:'5%', height:'5%'}} src="/images/icon.svg" alt=""/>
    </Link>
      
    </nav>
  )
}
