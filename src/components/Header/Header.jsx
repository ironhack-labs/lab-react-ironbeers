import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="headeHeader">
            <Link to='/'>
                <i class="fa-solid fa-house"></i>
            </Link>
        </header>
    )
}

export default Header