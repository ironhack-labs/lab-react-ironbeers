import React from 'react'
import { Nav } from 'react-bootstrap'

const NavHome = props => {
    return (
        
        <>
       
<Nav variant="pills" className="justify-content-center" activeKey="/">
    <Nav.Item>
      <Nav.Link href="/">Home</Nav.Link>
    </Nav.Item>
     </Nav>
        </>
    )
}

export default NavHome



