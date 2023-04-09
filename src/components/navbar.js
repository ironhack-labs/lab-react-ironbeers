import { NavLink } from "react-router-dom";

function NavBar(){


    return(
        <NavLink to ="/">
            <img style={{width:"100%", height:"auto"   }} src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png" alt="home" />
        </NavLink>
    )
}

export default NavBar