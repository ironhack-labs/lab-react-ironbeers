import React from 'react'
import {Link} from 'react-router-dom'


export default function New() {
  return (
    <div>
     <Link to='/'>
           <button className='buttonFull'>
               <img style={{width:'40px'}} src='/homeIcon.svg' alt='homeicon'/>
           </button>
       </Link>
    </div>
  )
}
