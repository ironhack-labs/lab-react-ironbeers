import {Link,NavLink} from "react-router-dom"

function NavBar(){
    return(
        <div>
            <NavLink to ="/" className={({isActive})=>isActive?"selected":""} >Home</NavLink>
        </div>
    )
}
export default NavBar