import React from 'react'
import {NavLink} from 'react-router-dom'
function Header() {
    return (
        <nav>
            <NavLink to="/"><a href='/' ><img alt="home" src="https://lh3.googleusercontent.com/proxy/0qDsG9GlNQeT09FuLDTWfVeynuBLdRcMB0OYiqpZFEXjONY-9nH3YiHsdJSzaWZihDA76ulh_UUiZoFbMOjrvcL9nnWb4mXXfnyd7uH3pVgqumohW4RzGO6E_X_DIu4"/></a></NavLink> 
        </nav>
    )
}

export default Header