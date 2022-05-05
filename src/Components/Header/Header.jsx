import { Image } from "react-bootstrap"
import { Link } from "react-router-dom"

const Header = () => {


    return (
        <Link to="/" >
            <Image fluid src={"https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png"} />
        </Link>
    )
}

export default Header