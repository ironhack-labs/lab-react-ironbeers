import { Link } from "react-router-dom"
function Header (){
    return(
        <div className="d-flex justify-content-center mb-3">
            <Link to="/">
                <img style={{ width: "100vw" }} src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png" alt="Home Icon" />
            </Link>
        </div>
    )
}

export default Header