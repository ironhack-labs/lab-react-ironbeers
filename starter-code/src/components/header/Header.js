import React from 'react'
import {Link, useLocation } from 'react-router-dom'

export const Header = () => {
  let location = useLocation();
  if(location.pathname !=='/'){
    return (
        <div className="bg-primary p-3 sticky-top">
          <Link className="text-center text-light" to="/"><i class="fas fa-home fa-2x"></i></Link>  
        </div>
    )}else{return null}
}
