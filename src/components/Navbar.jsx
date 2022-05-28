import React from 'react'
import { NavLink } from "react-router-dom"
import { AiFillHome } from 'react-icons/ai'

export default function Navbar() {
  return (
    <>
    <NavLink to="/" className='bg-blue-300 w-full h-16 flex flex-row justify-center items-center'>
        <p className="text-white text-3xl">{<AiFillHome/>}</p>
    </NavLink>
    
     </>
  )
}
