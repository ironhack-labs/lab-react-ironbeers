import React from 'react'
import {Menubar} from 'primereact/menubar'

const Navbar = () => {
  const state = {
			items: [
				{ 
          icon: 'pi pi-fw pi-home',
          command: () => { window.location = "/" }
         },
			]
		}
  return (
  <div style={{width:'100%'}} >
    <Menubar model={state.items}/>
  </div>
)}

export default Navbar