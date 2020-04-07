import React from 'react'

export default function NavUser(props) {
   return (
      <div className='nav-user'>
         <h3>Hello {props.username}</h3>
         <button onClick={props.logout}>Log Out</button>
      </div>
   )
}


